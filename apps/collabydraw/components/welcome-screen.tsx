import Link from "next/link"
import { CollaborationButton } from "./CollaborationButton"

export function MainMenuWelcome() {
    return (
        <div className="excalifont welcome-screen-decor welcome-screen-decor-hint welcome-screen-decor-hint--menu">
            <svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 41 94" className="" fill="none">
                <path d="M38.5 83.5c-14-2-17.833-10.473-21-22.5C14.333 48.984 12 22 12 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="m12.005 10.478 7.905 14.423L6 25.75l6.005-15.273Z" fill="currentColor"></path>
                <path d="M12.005 10.478c1.92 3.495 3.838 7 7.905 14.423m-7.905-14.423c3.11 5.683 6.23 11.368 7.905 14.423m0 0c-3.68.226-7.35.455-13.91.85m13.91-.85c-5.279.33-10.566.647-13.91.85m0 0c1.936-4.931 3.882-9.86 6.005-15.273M6 25.75c2.069-5.257 4.135-10.505 6.005-15.272" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
            </svg>
            <div className="welcome-screen-decor-hint__label font-excalifont">Export, preferences, languages, ...</div>
        </div>
    )
}

export function ToolMenuWelcome() {
    return (
        <div className="excalifont z-[4] welcome-screen-decor welcome-screen-decor-hint welcome-screen-decor-hint--toolbar">
            <div className="welcome-screen-decor-hint__label">Pick a tool &amp; Start drawing!</div>
            <svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 38 78" className="" fill="none">
                <path d="M1 77c14-2 31.833-11.973 35-24 3.167-12.016-6-35-9.5-43.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="m24.165 1.093-2.132 16.309 13.27-4.258-11.138-12.05Z" fill="currentColor"></path>
                <path d="M24.165 1.093c-.522 3.953-1.037 7.916-2.132 16.309m2.131-16.309c-.835 6.424-1.68 12.854-2.13 16.308m0 0c3.51-1.125 7.013-2.243 13.27-4.257m-13.27 4.257c5.038-1.608 10.08-3.232 13.27-4.257m0 0c-3.595-3.892-7.197-7.777-11.14-12.05m11.14 12.05c-3.837-4.148-7.667-8.287-11.14-12.05" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
            </svg>
        </div>
    )
}

export function HomeWelcome() {
    return (
        <>
            <div className="welcome-screen-center z-[4]">
                <div className="welcome-screen-center__logo excalifont welcome-screen-decor">
                    <div className="ExcalidrawLogo is-small">
                        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="ExcalidrawLogo-icon">
                            <path d="M39.9 32.889a.326.326 0 0 0-.279-.056c-2.094-3.083-4.774-6-7.343-8.833l-.419-.472a.212.212 0 0 0-.056-.139.586.586 0 0 0-.167-.111l-.084-.083-.056-.056c-.084-.167-.28-.278-.475-.167-.782.39-1.507.973-2.206 1.528-.92.722-1.842 1.445-2.708 2.25a8.405 8.405 0 0 0-.977 1.028c-.14.194-.028.361.14.444-.615.611-1.23 1.223-1.843 1.861a.315.315 0 0 0-.084.223c0 .083.056.166.111.194l1.09.833v.028c1.535 1.528 4.244 3.611 7.12 5.861.418.334.865.667 1.284 1 .195.223.39.473.558.695.084.11.28.139.391.055.056.056.14.111.196.167a.398.398 0 0 0 .167.056.255.255 0 0 0 .224-.111.394.394 0 0 0 .055-.167c.029 0 .028.028.056.028a.318.318 0 0 0 .224-.084l5.082-5.528a.309.309 0 0 0 0-.444Zm-14.63-1.917a.485.485 0 0 0 .111.14c.586.5 1.2 1 1.843 1.555l-2.569-1.945-.251-.166c-.056-.028-.112-.084-.168-.111l-.195-.167.056-.056.055-.055.112-.111c.866-.861 2.346-2.306 3.1-3.028-.81.805-2.43 3.167-2.095 3.944Zm8.767 6.89-2.122-1.612a44.713 44.713 0 0 0-2.625-2.5c1.145.861 2.122 1.611 2.262 1.75 1.117.972 1.06.806 1.815 1.445l.921.666a1.06 1.06 0 0 1-.251.25Zm.558.416-.056-.028c.084-.055.168-.111.252-.194l-.196.222ZM1.089 5.75c.055.361.14.722.195 1.056.335 1.833.67 3.5 1.284 4.75l.252.944c.084.361.223.806.363.917 1.424 1.25 3.602 3.11 5.947 4.889a.295.295 0 0 0 .363 0s0 .027.028.027a.254.254 0 0 0 .196.084.318.318 0 0 0 .223-.084c2.988-3.305 5.221-6.027 6.813-8.305.112-.111.14-.278.14-.417.111-.111.195-.25.307-.333.111-.111.111-.306 0-.39l-.028-.027c0-.055-.028-.139-.084-.167-.698-.666-1.2-1.138-1.731-1.638-.922-.862-1.871-1.75-3.881-3.75l-.028-.028c-.028-.028-.056-.056-.112-.056-.558-.194-1.703-.389-3.127-.639C6.087 2.223 3.21 1.723.614.944c0 0-.168 0-.196.028l-.083.084c-.028.027-.056.055-.224.11h.056-.056c.028.167.028.278.084.473 0 .055.112.5.112.555l.782 3.556Zm15.496 3.278-.335-.334c.084.112.196.195.335.334Zm-3.546 4.666-.056.056c0-.028.028-.056.056-.056Zm-2.038-10c.168.167.866.834 1.033.973-.726-.334-2.54-1.167-3.379-1.445.838.167 1.983.334 2.346.472ZM1.424 2.306c.419.722.754 3.222 1.089 5.666-.196-.778-.335-1.555-.503-2.278-.251-1.277-.503-2.416-.838-3.416.056 0 .14 0 .252.028Zm-.168-.584c-.112 0-.223-.028-.307-.028 0-.027 0-.055-.028-.055.14 0 .223.028.335.083Zm-1.089.222c0-.027 0-.027 0 0ZM39.453 1.333c.028-.11-.558-.61-.363-.639.42-.027.42-.666 0-.666-.558.028-1.144.166-1.675.25-.977.194-1.982.389-2.96.61-2.205.473-4.383.973-6.561 1.557-.67.194-1.424.333-2.066.666-.224.111-.196.333-.084.472-.056.028-.084.028-.14.056-.195.028-.363.056-.558.083-.168.028-.252.167-.224.334 0 .027.028.083.028.11-1.173 1.556-2.485 3.195-3.909 4.945-1.396 1.611-2.876 3.306-4.356 5.056-4.719 5.5-10.052 11.75-15.943 17.25a.268.268 0 0 0 0 .389c.028.027.056.055.084.055-.084.084-.168.14-.252.222-.056.056-.084.111-.084.167a.605.605 0 0 0-.111.139c-.112.111-.112.305.028.389.111.11.307.11.39-.028.029-.028.029-.056.056-.056a.44.44 0 0 1 .615 0c.335.362.67.723.977 1.028l-.698-.583c-.112-.111-.307-.083-.39.028-.113.11-.085.305.027.389l7.427 6.194c.056.056.112.056.196.056s.14-.028.195-.084l.168-.166c.028.027.083.027.111.027.084 0 .14-.027.196-.083 10.052-10.055 18.15-17.639 27.42-24.417.083-.055.111-.166.111-.25.112 0 .196-.083.251-.194 1.704-5.194 2.039-9.806 2.15-12.083v-.028c0-.028.028-.056.028-.083.028-.056.028-.084.028-.084a1.626 1.626 0 0 0-.111-1.028ZM21.472 9.5c.446-.5.893-1.028 1.34-1.5-2.876 3.778-7.65 9.583-14.408 16.5 4.607-5.083 9.242-10.333 13.068-15ZM5.193 35.778h.084-.084Zm3.462 3.194c-.027-.028-.027-.028 0-.028v.028Zm4.16-3.583c.224-.25.448-.472.699-.722 0 0 0 .027.028.027-.252.223-.475.445-.726.695Zm1.146-1.111c.14-.14.279-.334.446-.5l.028-.028c1.648-1.694 3.351-3.389 5.082-5.111l.028-.028c.419-.333.921-.694 1.368-1.028a379.003 379.003 0 0 0-6.952 6.695ZM24.794 6.472c-.921 1.195-1.954 2.778-2.82 4.028-2.736 3.944-11.532 13.583-11.727 13.75a1976.983 1976.983 0 0 1-8.042 7.639l-.167.167c-.14-.167-.14-.417.028-.556C14.49 19.861 22.03 10.167 25.074 5.917c-.084.194-.14.36-.28.555Zm4.83 5.695c-1.116-.64-1.646-1.64-1.34-2.611l.084-.334c.028-.083.084-.194.14-.277.307-.5.754-.917 1.257-1.167.027 0 .055 0 .083-.028-.028-.056-.028-.139-.028-.222.028-.167.14-.278.335-.278.335 0 1.369.306 1.76.639.111.083.223.194.335.305.14.167.363.445.474.667.056.028.112.306.196.445.056.222.111.472.084.694-.028.028 0 .194-.028.194a2.668 2.668 0 0 1-.363 1.028c-.028.028-.028.056-.056.084l-.028.027c-.14.223-.335.417-.53.556-.643.444-1.369.583-2.095.389 0 0-.195-.084-.28-.111Zm8.154-.834a39.098 39.098 0 0 1-.893 3.167c0 .028-.028.083 0 .111-.056 0-.084.028-.14.056-2.206 1.61-4.356 3.305-6.506 5.028 1.843-1.64 3.686-3.306 5.613-4.945.558-.5.949-1.139 1.06-1.861l.28-1.667v-.055c.14-.334.67-.195.586.166Z" fill="currentColor"></path></svg>
                        <h1 className="brand-title ExcalidrawLogo-text font-excalifont">CollabyDraw</h1>
                    </div>
                </div>
                <div className="welcome-screen-center__heading welcome-screen-decor font-excalifont">All your data is saved locally in your browser.</div>
                <div className="welcome-screen-menu">
                    <button type="button" className="welcome-screen-menu-item ">
                        <div className="welcome-screen-menu-item__icon">
                            <svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 20 20" className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m9.257 6.351.183.183H15.819c.34 0 .727.182 1.051.506.323.323.505.708.505 1.05v5.819c0 .316-.183.7-.52 1.035-.337.338-.723.522-1.037.522H4.182c-.352 0-.74-.181-1.058-.5-.318-.318-.499-.705-.499-1.057V5.182c0-.351.181-.736.5-1.054.32-.321.71-.503 1.057-.503H6.53l2.726 2.726Z" strokeWidth="1.25"></path>
                            </svg>
                        </div>
                        <div className="welcome-screen-menu-item__text">Open</div>
                        <div className="welcome-screen-menu-item__shortcut">Ctrl+O</div>
                    </button>

                    {/* <button type="button" className="welcome-screen-menu-item">
                        <div className="welcome-screen-menu-item__icon">
                            <svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 24 24" className="" fill="none" strokeWidth="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                <g strokeWidth="1.5">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <circle cx="12" cy="12" r="9"></circle>
                                    <line x1="12" y1="17" x2="12" y2="17.01"></line>
                                    <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4"></path>
                                </g>
                            </svg>
                        </div>
                        <div className="welcome-screen-menu-item__text">Help</div>
                        <div className="welcome-screen-menu-item__shortcut">?</div>
                    </button> */}
                    
                    <CollaborationButton />
                    <Link className="welcome-screen-menu-item " href="/auth/signup" target="_blank" rel="noreferrer">
                        <div className="welcome-screen-menu-item__icon">
                            <svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 24 24" className="" fill="none" strokeWidth="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                <g strokeWidth="1.5">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M15 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                                    <path d="M21 12h-13l3 -3"></path>
                                    <path d="M11 15l-3 -3"></path>
                                </g>
                            </svg>
                        </div>
                        <div className="welcome-screen-menu-item__text">Sign up</div>
                    </Link>
                </div>
            </div >
        </>
    )
}