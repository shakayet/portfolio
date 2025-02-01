import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";


const ParticleBG = () => {
    const particlesInit = useCallback(async (engine) => {
        try {
            console.log("Particles engine initialized:", engine);
            await loadSlim(engine);
        } catch (error) {
            console.error("Error loading particles engine:", error);
        }
    }, []);

    const particlesLoaded = useCallback((container) => {
        console.log("Particles container loaded:", container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: { value: "#0F1729" },
                },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onClick: { enable: true, mode: "push" },
                        onHover: { enable: true, mode: "repulse" },
                        resize: true,
                    },
                    modes: {
                        push: { quantity: 4 },
                        repulse: { distance: 100, duration: 1 },
                        grab: { distance: 200, links: { opacity: 0.3 } },
                    },
                },
                particles: {
                    color: { value: "#ffffff" },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.2,
                        width: 1,
                    },
                    collisions: { enable: true },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: { default: "bounce" },
                        random: false,
                        speed: 1.5,
                        straight: false,
                    },
                    number: {
                        density: { enable: true, area: 1200 },
                        value: 50,
                    },
                    opacity: { value: 0.3 },
                    shape: { type: "circle" },
                    size: { value: { min: 1, max: 3 } },
                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticleBG;