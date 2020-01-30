import React, { useState, useEffect } from 'react';
import { isInStandaloneMode } from './utils';
import parse from 'html-react-parser';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css';
import PropTypes from 'prop-types';

PwaInstaller.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string,
  run: PropTypes.bool,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
}

function closeWindow() {
    window.close();
    return false; // n2
}


let deferredPrompt = null;
export default function PwaInstaller({
    title = 'Add to Home Screen',
    run = true,
    icon,
    backgroundColor,
    color }) {
    const [bannerVisible, setBannerVisible] = useState(false);
    // const dispatch = useStoreDispatch();

    // animation on scrolling settings
    AOS.init({
        offset: 100,
        delay: 1000,
    });
    // end animation on scrolling settings

    useEffect(() => {
        window.addEventListener('beforeinstallprompt', (e) => { // n1
            // Prevent Chrome 67 and earlier from automatically showing the prompt
            e.preventDefault();
            // Stash the event so it can be triggered later.
            deferredPrompt = e;
            setBannerVisible(true);
        })
    }, [])

    const handlePwaInstall = () => {
        if(deferredPrompt) {
            // Show the prompt
            setBannerVisible(false);
            deferredPrompt.prompt();
            // Wait for the user to respond to the prompt
            deferredPrompt.userChoice.then(function(choiceResult) {
                if(choiceResult.outcome === 'accepted') {
                    // showSnackbar(dispatch, 'Instalando App em instantes...', 'warning', 7000)
                    setTimeout(() => {
                        // showSnackbar(dispatch, 'Instalado com sucesso! Você já pode acessar o app pela sua tela inicial', 'success', 6000)
                        setTimeout(() => closeWindow(), 7000)
                    }, 11000)
                } else {
                    // showSnackbar(dispatch, 'A instalação do app foi cancelada.', 'warning')
                }
                deferredPrompt = null;
            });
        }
    }


    const styles = {
        textAndClosingBtn: {
            color: color || "white",
        },
        banner: {
            background: backgroundColor || "black",
        }
        // icon: {
        //     animationDelay: '4s',
        // },
        // closeBtn: {
        //     animationDelay: '6s',
        //     zIndex: 2100,
        // },
    }

    // RENDER
    const showTitle = () => (
        <div
            className="add-to-home-text text-default"
        >
            <a
                style={styles.textAndClosingBtn}
            >
              { parse(title) }
            </a>
        </div>
    );

    const handleCloseBannerBtnClick = () => setBannerVisible(false);

    const showCloseBtn = () => (
        <div
            style={styles.closeBtn}
            className="add-to-home-close-btn"
            onClick={handleCloseBannerBtnClick}
        >
            <i style={styles.textAndClosingBtn} className="fas fa-times"></i>
        </div>
    );

    const shouldRender = run && bannerVisible && !isInStandaloneMode();

    return (
        <div>
            {true // replace with shouldRender after testing...
            ? (
                <div
                  style={styles.banner}
                  className="add-to-home-banner"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                    <div
                        onClick={handlePwaInstall}
                        data-aos="flip-left"
                        className="add-to-home-content"
                    >
                        {icon
                        ? (
                            <img
                                style={styles.icon}
                                className="add-to-home-icon"
                                src={icon}
                            />
                        ) : null}
                        {showTitle()}
                    </div>
                    {showCloseBtn()}
                </div>
            ) : null}
        </div>
    );
}

/* COMMENTS
n1: If the user selects Install, the app is installed (available as standalone desktop app), and the Install button no longer shows (the onbeforeinstallprompt event no longer fires if the app is already installed).
n2:
a. only desktop
b. preventing the browser to attempt to go to that URL (which it obviously isn't).
*/