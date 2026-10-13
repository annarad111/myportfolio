'use client';

import { useEffect, useRef } from 'react';
import { init } from '@/lib/hscroll';

type Props = {
  videoOlympian?: string;
  videoMeteors?: string;
  motion?: number;
  smoothness?: number;
  customCursor?: boolean;
  runner?: boolean;
};

export default function ArcadePortfolio({
  videoOlympian = '/videos/olympian-odds.mp4',
  videoMeteors,
  motion = 1,
  smoothness = 0.1,
  customCursor = true,
  runner = true,
}: Props) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;
    document.body.style.background = '#000000';
    const hs = init(rootRef.current, { lerp: smoothness, par: motion, cursor: customCursor, runner });
    return () => hs.destroy();
  }, [smoothness, motion, customCursor, runner]);

  const olympianSrc = videoOlympian;
  const meteorsSrc = videoMeteors;

  return (
    <div ref={rootRef} style={{"fontFamily":"'Bricolage Grotesque',sans-serif","background":"#000","color":"#fff"}}>
      <header style={{"position":"fixed","top":"0","left":"0","right":"0","zIndex":"30","display":"grid","gridTemplateColumns":"1fr auto 1fr","alignItems":"center","gap":"24px","padding":"18px 2.4vw","fontFamily":"'Space Mono',monospace","fontSize":"12px","textTransform":"uppercase","borderBottom":"1px solid #fff","background":"#000"}}>
        <a href="#start" data-goto="start" style={{"display":"flex","gap":"10px","alignItems":"center"}}>
          <span style={{"fontFamily":"'Silkscreen',monospace","fontSize":"13px"}}>P1</span>
          <span>Ana-Maria Rădulescu</span>
        </a>
        <nav style={{"display":"flex","gap":"4px"}}>
          <a href="#levels" data-goto="levels" style={{"padding":"6px 10px","transition":"background .2s,color .2s"}} className="hvB1">Games</a>
          <a href="#inventory" data-goto="inventory" style={{"padding":"6px 10px","transition":"background .2s,color .2s"}} className="hvB2">Work</a>
          <a href="#saves" data-goto="saves" style={{"padding":"6px 10px","transition":"background .2s,color .2s"}} className="hvB3">Experience</a>
          <a href="#player" data-goto="player" style={{"padding":"6px 10px","transition":"background .2s,color .2s"}} className="hvB4">About</a>
          <a href="#continue" data-goto="continue" style={{"padding":"6px 10px","transition":"background .2s,color .2s"}} className="hvB5">Contact</a>
        </nav>
        <div style={{"display":"flex","gap":"18px","justifyContent":"flex-end","alignItems":"center"}}>
          <span style={{"fontFamily":"'Silkscreen',monospace","fontSize":"13px","whiteSpace":"nowrap"}}>
            {"LVL "}
            <span data-hs-index="">01 / 09</span>
          </span>
          <span data-hs-current="" style={{"minWidth":"130px","textAlign":"right","whiteSpace":"nowrap"}}>Start</span>
        </div>
      </header>
      <footer style={{"position":"fixed","left":"0","right":"0","bottom":"0","zIndex":"30","display":"flex","alignItems":"center","gap":"20px","padding":"14px 2.4vw","fontFamily":"'Space Mono',monospace","fontSize":"12px","textTransform":"uppercase","borderTop":"1px solid #fff","background":"#000"}}>
        <span style={{"fontFamily":"'Silkscreen',monospace","fontSize":"13px"}}>XP</span>
        <div style={{"flex":"1","height":"10px","border":"1px solid #fff","padding":"2px","boxSizing":"content-box","position":"relative"}}>
          <div data-hs-progress="" style={{"height":"10px","background":"repeating-linear-gradient(90deg,#fff 0 10px,transparent 10px 14px)","transformOrigin":"0 50%","transform":"scaleX(0)"}} />
        </div>
        <span style={{"whiteSpace":"nowrap"}}>Scroll or swipe →</span>
      </footer>
      <div data-cursor="" style={{"position":"fixed","left":"0","top":"0","width":"16px","height":"16px","background":"#fff","mixBlendMode":"difference","pointerEvents":"none","zIndex":"40","willChange":"transform"}} />
      <div data-runner="" style={{"position":"fixed","left":"0","top":"0","width":"34px","height":"34px","zIndex":"35","pointerEvents":"none","willChange":"transform"}}>
        <div data-face="" style={{"width":"100%","height":"100%"}}>
          <svg viewBox="0 0 48 48" width="34" height="34" style={{"overflow":"visible","display":"block"}}>
            <g data-leg-a="" style={{"transformBox":"fill-box","transformOrigin":"50% 0"}}>
              <rect x="14.5" y="33" width="7" height="10" rx="3.5" fill="oklch(0.42 0.15 300)" stroke="#0b0b0b" strokeWidth="1.6" />
            </g>
            <g data-leg-b="" style={{"transformBox":"fill-box","transformOrigin":"50% 0"}}>
              <rect x="26.5" y="33" width="7" height="10" rx="3.5" fill="oklch(0.42 0.15 300)" stroke="#0b0b0b" strokeWidth="1.6" />
            </g>
            <g data-body="" style={{"transformBox":"fill-box","transformOrigin":"50% 100%"}}>
              <g data-arm-a="" style={{"transformBox":"fill-box","transformOrigin":"100% 50%"}}>
                <path d="M10 26 L2 30 L10 32 Z" fill="oklch(0.52 0.16 300)" stroke="#0b0b0b" strokeWidth="1.6" strokeLinejoin="round" />
              </g>
              <g data-arm-b="" style={{"transformBox":"fill-box","transformOrigin":"0% 50%"}}>
                <path d="M38 26 L46 30 L38 32 Z" fill="oklch(0.52 0.16 300)" stroke="#0b0b0b" strokeWidth="1.6" strokeLinejoin="round" />
              </g>
              <path d="M9 16 L2 13 L8 21 L1 22 L9 27 Z" fill="oklch(0.52 0.16 300)" stroke="#0b0b0b" strokeWidth="1.6" strokeLinejoin="round" />
              <path d="M10 35 C5 27 6 17 12 13 L11 2 L19 10.5 C22 9.6 26 9.6 29 10.5 L37 2 L36 13 C42 17 43 27 38 35 C34 40 14 40 10 35 Z" fill="oklch(0.52 0.16 300)" stroke="#0b0b0b" strokeWidth="1.6" strokeLinejoin="round" />
              <path d="M14 18 L22 21 L15.5 23.5 Z" fill="#ff3d3d" stroke="#0b0b0b" strokeWidth="1.2" strokeLinejoin="round" />
              <path d="M36 18 L27 21 L34.5 23.5 Z" fill="#ff3d3d" stroke="#0b0b0b" strokeWidth="1.2" strokeLinejoin="round" />
              <circle cx="18.6" cy="21.4" r="1.1" fill="#fff" />
              <circle cx="30.6" cy="21.4" r="1.1" fill="#fff" />
              <path d="M13 27 Q24 36.5 35 27 Q24 30.5 13 27 Z" fill="#fff" stroke="#0b0b0b" strokeWidth="1.4" strokeLinejoin="round" />
              <path d="M19 29.6 L19.5 32.2 M24 30.4 L24 33.2 M29 29.6 L28.5 32.2" stroke="#0b0b0b" strokeWidth="1" />
            </g>
          </svg>
        </div>
      </div>
      <div data-hs-spacer="" style={{"position":"relative"}}>
        <div data-hs-sticky="" style={{"position":"sticky","top":"0","height":"100vh","overflow":"hidden","backgroundImage":"radial-gradient(rgba(255,255,255,.22) 1px,transparent 1px)","backgroundSize":"28px 28px"}}>
          <div data-hs-track="" style={{"position":"relative","display":"flex","height":"100vh","width":"max-content","willChange":"transform"}}>
            <section id="start" data-hs-section="Start" style={{"flex":"none","position":"relative","width":"120vw","height":"100vh","display":"flex","alignItems":"center","gap":"4vw","padding":"10vh 0 9vh 4vw","boxSizing":"border-box"}}>
              <div style={{"flex":"none","width":"62vw","display":"flex","flexDirection":"column","gap":"3vh"}}>
                <div data-reveal="up" style={{"display":"flex","gap":"12px","alignItems":"center","fontFamily":"'Silkscreen',monospace","fontSize":"14px"}}>
                  <span style={{"background":"#fff","color":"#000","padding":"4px 8px"}}>Player 1</span>
                  <span style={{"whiteSpace":"nowrap"}}>Frontend Engineer · 5+ yrs</span>
                </div>
                <h1 style={{"margin":"0","fontSize":"max(38px,min(8.8vw,12vh))","lineHeight":".86","fontWeight":"800","fontStretch":"75%","letterSpacing":"-.035em"}}>
                  <span style={{"display":"block","overflow":"hidden","paddingBottom":".12em","marginBottom":"-.12em"}}>
                    <span data-reveal="line" style={{"display":"block"}}>Frontend</span>
                  </span>
                  <span style={{"display":"block","overflow":"hidden","paddingBottom":".12em","marginBottom":"-.12em"}}>
                    <span data-reveal="line" data-delay=".08" style={{"display":"block"}}>engineer who</span>
                  </span>
                  <span style={{"display":"block","overflow":"hidden","paddingBottom":".12em","marginBottom":"-.12em"}}>
                    <span data-reveal="line" data-delay=".16" style={{"display":"block","fontWeight":"200"}}>ships games.</span>
                  </span>
                </h1>
                <p data-reveal="up" data-delay=".3" style={{"margin":"0","maxWidth":"46ch","fontSize":"17px","lineHeight":"1.5","textWrap":"pretty"}}>React, TypeScript and Next.js, with a visual arts background. I build interactive products from scratch, real-time systems with WebSockets, and modular game architecture.</p>
                <div data-reveal="up" data-delay=".4" style={{"display":"flex","gap":"16px","alignItems":"center","fontFamily":"'Silkscreen',monospace","fontSize":"16px"}}>
                  <a data-magnet="" href="#levels" data-goto="levels" style={{"background":"#fff","color":"#000","padding":"14px 22px"}}>▶ Press start</a>
                  <span data-blink="">Scroll to play</span>
                </div>
              </div>
              <div style={{"flex":"none","width":"48vw","position":"relative"}}>
                <div data-mouse="24" style={{"position":"relative"}}>
                  <div data-reveal="clip" data-delay=".2" style={{"position":"relative","width":"100%","aspectRatio":"4/3","maxHeight":"70vh","overflow":"hidden","border":"1px solid #fff","background":"#111"}}>
                    <video data-autoplay="" src={olympianSrc} poster="https://anaradulescu.xyz/olympian-odds.png" muted loop playsInline style={{"position":"absolute","inset":"0","width":"100%","height":"100%","objectFit":"cover"}} />
                  </div>
                  <div style={{"position":"absolute","top":"-10px","left":"-10px","width":"28px","height":"28px","borderTop":"3px solid #fff","borderLeft":"3px solid #fff"}} />
                  <div style={{"position":"absolute","bottom":"-10px","right":"-10px","width":"28px","height":"28px","borderBottom":"3px solid #fff","borderRight":"3px solid #fff"}} />
                  <div style={{"position":"absolute","left":"14px","top":"14px","background":"#000","border":"1px solid #fff","padding":"6px 10px","fontFamily":"'Silkscreen',monospace","fontSize":"12px","display":"flex","gap":"8px","alignItems":"center"}}>
                    <span data-blink="">●</span>
                    {"Rec · Olympian Odds"}
                  </div>
                </div>
              </div>
            </section>
            <section id="levels" data-hs-section="Level select" style={{"flex":"none","position":"relative","width":"86vw","height":"100vh","display":"flex","flexDirection":"column","justifyContent":"center","gap":"5vh","padding":"10vh 5vw 9vh","boxSizing":"border-box","background":"#fff","color":"#000"}}>
              <div style={{"fontFamily":"'Silkscreen',monospace","fontSize":"16px"}}>World 01 — Games</div>
              <div data-skew="">
                <h2 data-par="0.15" style={{"margin":"0","fontSize":"clamp(80px,13vw,270px)","lineHeight":".8","fontWeight":"800","fontStretch":"75%","letterSpacing":"-.04em"}}>
                  {"Select"}
                  <br />
                  {"level"}
                </h2>
              </div>
              <div style={{"display":"grid","gridTemplateColumns":"repeat(3,minmax(0,1fr))","gap":"12px","maxWidth":"68vw"}}>
                <a href="#olympian" data-goto="olympian" data-reveal="up" style={{"border":"2px solid #000","padding":"18px","display":"flex","flexDirection":"column","gap":"22px","transition":"background .2s,color .2s"}} className="hvB6">
                  <span style={{"fontFamily":"'Silkscreen',monospace","fontSize":"13px"}}>1-1</span>
                  <span style={{"fontSize":"26px","fontWeight":"700","fontStretch":"80%","lineHeight":"1"}}>Olympian Odds</span>
                </a>
                <a href="#meteors" data-goto="meteors" data-reveal="up" data-delay=".08" style={{"border":"2px solid #000","padding":"18px","display":"flex","flexDirection":"column","gap":"22px","transition":"background .2s,color .2s"}} className="hvB7">
                  <span style={{"fontFamily":"'Silkscreen',monospace","fontSize":"13px"}}>1-2</span>
                  <span style={{"fontSize":"26px","fontWeight":"700","fontStretch":"80%","lineHeight":"1"}}>{"Meteors & Rockets"}</span>
                </a>
                <a href="#engine" data-goto="engine" data-reveal="up" data-delay=".16" style={{"border":"2px solid #000","padding":"18px","display":"flex","flexDirection":"column","gap":"22px","background":"#000","color":"#fff"}}>
                  <span style={{"fontFamily":"'Silkscreen',monospace","fontSize":"13px"}}>Boss</span>
                  <span style={{"fontSize":"26px","fontWeight":"700","fontStretch":"80%","lineHeight":"1"}}>The game engine</span>
                </a>
              </div>
            </section>
            <section id="olympian" data-hs-section="1-1 Olympian Odds" style={{"flex":"none","position":"relative","width":"140vw","height":"100vh","display":"flex","alignItems":"center","gap":"4vw","padding":"10vh 4vw 9vh","boxSizing":"border-box"}}>
              <div style={{"flex":"none","width":"min(86vw,124vh)","position":"relative"}}>
                <div data-reveal="clip" style={{"position":"relative","width":"100%","aspectRatio":"16/9","maxHeight":"68vh","overflow":"hidden","border":"1px solid #fff","background":"#111"}}>
                  <video data-autoplay="" data-par="-0.08" src={olympianSrc} poster="https://anaradulescu.xyz/olympian-odds.png" muted loop playsInline style={{"position":"absolute","top":"0","left":"-6%","width":"112%","height":"100%","objectFit":"cover"}} />
                </div>
                <div style={{"position":"absolute","top":"-10px","left":"-10px","width":"28px","height":"28px","borderTop":"3px solid #fff","borderLeft":"3px solid #fff"}} />
                <div style={{"position":"absolute","bottom":"-10px","right":"-10px","width":"28px","height":"28px","borderBottom":"3px solid #fff","borderRight":"3px solid #fff"}} />
                <div style={{"position":"absolute","left":"0","top":"-44px","display":"flex","gap":"10px","fontFamily":"'Silkscreen',monospace","fontSize":"13px"}}>
                  <span style={{"background":"#fff","color":"#000","padding":"4px 8px"}}>1-1</span>
                  <span style={{"padding":"4px 0"}}>Cleared · solo build</span>
                </div>
              </div>
              <div style={{"flex":"none","width":"38vw","display":"flex","flexDirection":"column","gap":"2.2vh"}}>
                <h3 data-skew="" style={{"margin":"0","fontSize":"max(44px,min(6.6vw,12vh))","lineHeight":".84","fontWeight":"800","fontStretch":"75%","letterSpacing":"-.035em"}}>
                  {"Olympian"}
                  <br />
                  {"Odds"}
                </h3>
                <div data-reveal="up" style={{"fontSize":"22px","fontWeight":"600","fontStretch":"85%"}}>World-map betting game · React + TypeScript</div>
                <div style={{"display":"flex","flexDirection":"column","gap":"6px","fontFamily":"'Space Mono',monospace","fontSize":"13px","lineHeight":"1.45"}}>
                  <div data-reveal="left" data-delay=".05" style={{"display":"grid","gridTemplateColumns":"28px 1fr","gap":"8px"}}>
                    <span>▸</span>
                    <span>Interactive world map with country-based betting mechanics</span>
                  </div>
                  <div data-reveal="left" data-delay=".12" style={{"display":"grid","gridTemplateColumns":"28px 1fr","gap":"8px"}}>
                    <span>▸</span>
                    <span>Animated PNG sequences</span>
                  </div>
                  <div data-reveal="left" data-delay=".19" style={{"display":"grid","gridTemplateColumns":"28px 1fr","gap":"8px"}}>
                    <span>▸</span>
                    <span>WebSocket communication</span>
                  </div>
                  <div data-reveal="left" data-delay=".26" style={{"display":"grid","gridTemplateColumns":"28px 1fr","gap":"8px"}}>
                    <span>▸</span>
                    <span>Node.js mock backend to test gameplay before production integration</span>
                  </div>
                </div>
                <div data-reveal="up" data-delay=".3" style={{"display":"flex","gap":"8px","flexWrap":"wrap","fontFamily":"'Silkscreen',monospace","fontSize":"12px"}}>
                  <span style={{"border":"1px solid #fff","padding":"6px 10px"}}>React</span>
                  <span style={{"border":"1px solid #fff","padding":"6px 10px"}}>TypeScript</span>
                  <span style={{"border":"1px solid #fff","padding":"6px 10px"}}>WebSockets</span>
                  <span style={{"border":"1px solid #fff","padding":"6px 10px"}}>Node.js</span>
                </div>
              </div>
            </section>
            <section id="meteors" data-hs-section="1-2 Meteors & Rockets" style={{"flex":"none","position":"relative","width":"130vw","height":"100vh","display":"flex","alignItems":"center","gap":"4vw","padding":"10vh 4vw 9vh","boxSizing":"border-box"}}>
              <div style={{"flex":"none","width":"34vw","display":"flex","flexDirection":"column","gap":"3vh"}}>
                <div data-reveal="up" style={{"display":"flex","gap":"10px","fontFamily":"'Silkscreen',monospace","fontSize":"13px"}}>
                  <span style={{"background":"#fff","color":"#000","padding":"4px 8px"}}>1-2</span>
                  <span style={{"padding":"4px 0"}}>Cleared · solo build</span>
                </div>
                <h3 data-skew="" style={{"margin":"0","fontSize":"max(44px,min(6.6vw,12vh))","lineHeight":".84","fontWeight":"800","fontStretch":"75%","letterSpacing":"-.035em"}}>
                  {"Meteors"}
                  <br />
                  {"& Rockets"}
                </h3>
                <div data-reveal="up" data-delay=".1" style={{"fontSize":"22px","fontWeight":"600","fontStretch":"85%"}}>Grid-based game, built from scratch</div>
                <div data-reveal="up" data-delay=".2" style={{"display":"flex","gap":"8px","flexWrap":"wrap","fontFamily":"'Silkscreen',monospace","fontSize":"12px"}}>
                  <span style={{"border":"1px solid #fff","padding":"6px 10px"}}>Next.js</span>
                  <span style={{"border":"1px solid #fff","padding":"6px 10px"}}>PixiJS</span>
                  <span style={{"border":"1px solid #fff","padding":"6px 10px"}}>TypeScript</span>
                </div>
              </div>
              <div style={{"flex":"none","width":"min(84vw,122vh)","position":"relative"}}>
                <div data-reveal="clipup" style={{"position":"relative","width":"100%","aspectRatio":"16/9","maxHeight":"68vh","overflow":"hidden","border":"1px solid #fff","background":"#111"}}>
                  <video data-autoplay="" data-par="-0.08" src={meteorsSrc} poster="https://anaradulescu.xyz/meteors.jpeg" muted loop playsInline style={{"position":"absolute","top":"0","left":"-6%","width":"112%","height":"100%","objectFit":"cover"}} />
                </div>
                <div style={{"position":"absolute","top":"-10px","right":"-10px","width":"28px","height":"28px","borderTop":"3px solid #fff","borderRight":"3px solid #fff"}} />
                <div style={{"position":"absolute","bottom":"-10px","left":"-10px","width":"28px","height":"28px","borderBottom":"3px solid #fff","borderLeft":"3px solid #fff"}} />
              </div>
            </section>
            <section id="engine" data-hs-section="Boss · Engine" style={{"flex":"none","position":"relative","width":"160vw","height":"100vh","display":"flex","alignItems":"center","gap":"5vw","padding":"10vh 5vw 9vh","boxSizing":"border-box","background":"#fff","color":"#000"}}>
              <div style={{"flex":"none","width":"34vw","display":"flex","flexDirection":"column","gap":"3vh"}}>
                <div style={{"fontFamily":"'Silkscreen',monospace","fontSize":"14px"}}>
                  <span style={{"background":"#000","color":"#fff","padding":"4px 8px"}}>Boss level</span>
                </div>
                <h3 style={{"margin":"0","fontSize":"clamp(56px,6.4vw,136px)","lineHeight":".84","fontWeight":"800","fontStretch":"75%","letterSpacing":"-.035em"}}>
                  <span style={{"display":"block","overflow":"hidden","paddingBottom":".12em","marginBottom":"-.12em"}}>
                    <span data-reveal="line" style={{"display":"block"}}>One engine.</span>
                  </span>
                  <span style={{"display":"block","overflow":"hidden","paddingBottom":".12em","marginBottom":"-.12em"}}>
                    <span data-reveal="line" data-delay=".08" style={{"display":"block","fontWeight":"200"}}>14+ games.</span>
                  </span>
                </h3>
                <p data-reveal="up" data-delay=".15" style={{"margin":"0","fontSize":"17px","lineHeight":"1.5","maxWidth":"42ch","textWrap":"pretty"}}>A modular game engine supporting 14+ casino games, built around a shared template and state-machine architecture. Each game extends shared functionality with its own features, UI assets and visual themes.</p>
              </div>
              <div style={{"flex":"none","width":"60vw","display":"flex","flexDirection":"column","gap":"6vh"}}>
                <div data-sm="" data-fg="#000000" data-bg="#ffffff" style={{"display":"grid","gridTemplateColumns":"repeat(5,minmax(0,1fr))","gap":"10px","fontFamily":"'Silkscreen',monospace","fontSize":"15px"}}>
                  <div data-sm-node="" style={{"border":"2px solid #000","padding":"22px 14px","textAlign":"center","transition":"background .2s,color .2s"}}>Idle</div>
                  <div data-sm-node="" style={{"border":"2px solid #000","padding":"22px 14px","textAlign":"center","transition":"background .2s,color .2s"}}>Bet</div>
                  <div data-sm-node="" style={{"border":"2px solid #000","padding":"22px 14px","textAlign":"center","transition":"background .2s,color .2s"}}>Round</div>
                  <div data-sm-node="" style={{"border":"2px solid #000","padding":"22px 14px","textAlign":"center","transition":"background .2s,color .2s"}}>Result</div>
                  <div data-sm-node="" style={{"border":"2px solid #000","padding":"22px 14px","textAlign":"center","transition":"background .2s,color .2s"}}>Payout</div>
                </div>
                <div style={{"display":"grid","gridTemplateColumns":"repeat(7,minmax(0,1fr))","gap":"8px","fontFamily":"'Silkscreen',monospace","fontSize":"12px"}}>
                  <div data-reveal="scale" style={{"background":"#000","color":"#fff","aspectRatio":"1","padding":"10px","boxSizing":"border-box","display":"flex","alignItems":"flex-end"}}>1-1</div>
                  <div data-reveal="scale" data-delay=".04" style={{"background":"#000","color":"#fff","aspectRatio":"1","padding":"10px","boxSizing":"border-box","display":"flex","alignItems":"flex-end"}}>1-2</div>
                  <div data-reveal="scale" data-delay=".08" style={{"border":"2px solid #000","aspectRatio":"1","padding":"10px","boxSizing":"border-box"}}>03</div>
                  <div data-reveal="scale" data-delay=".12" style={{"border":"2px solid #000","aspectRatio":"1","padding":"10px","boxSizing":"border-box"}}>04</div>
                  <div data-reveal="scale" data-delay=".16" style={{"border":"2px solid #000","aspectRatio":"1","padding":"10px","boxSizing":"border-box"}}>05</div>
                  <div data-reveal="scale" data-delay=".20" style={{"border":"2px solid #000","aspectRatio":"1","padding":"10px","boxSizing":"border-box"}}>06</div>
                  <div data-reveal="scale" data-delay=".24" style={{"border":"2px solid #000","aspectRatio":"1","padding":"10px","boxSizing":"border-box"}}>07</div>
                  <div data-reveal="scale" data-delay=".28" style={{"border":"2px solid #000","aspectRatio":"1","padding":"10px","boxSizing":"border-box"}}>08</div>
                  <div data-reveal="scale" data-delay=".32" style={{"border":"2px solid #000","aspectRatio":"1","padding":"10px","boxSizing":"border-box"}}>09</div>
                  <div data-reveal="scale" data-delay=".36" style={{"border":"2px solid #000","aspectRatio":"1","padding":"10px","boxSizing":"border-box"}}>10</div>
                  <div data-reveal="scale" data-delay=".40" style={{"border":"2px solid #000","aspectRatio":"1","padding":"10px","boxSizing":"border-box"}}>11</div>
                  <div data-reveal="scale" data-delay=".44" style={{"border":"2px solid #000","aspectRatio":"1","padding":"10px","boxSizing":"border-box"}}>12</div>
                  <div data-reveal="scale" data-delay=".48" style={{"border":"2px solid #000","aspectRatio":"1","padding":"10px","boxSizing":"border-box"}}>13</div>
                  <div data-reveal="scale" data-delay=".52" style={{"border":"2px dashed #000","aspectRatio":"1","padding":"10px","boxSizing":"border-box"}}>14+</div>
                </div>
              </div>
              <div style={{"flex":"none","width":"34vw","background":"#000","color":"#fff","padding":"24px","boxSizing":"border-box","fontFamily":"'Space Mono',monospace","fontSize":"14px","lineHeight":"2"}}>
                <div style={{"fontFamily":"'Silkscreen',monospace","fontSize":"12px","marginBottom":"10px"}}>ws · node.js mock backend</div>
                <div data-reveal="left">→ connect</div>
                <div data-reveal="left" data-delay=".1">← session.ready</div>
                <div data-reveal="left" data-delay=".2">{"→ bet.place { country }"}</div>
                <div data-reveal="left" data-delay=".3">← round.start</div>
                <div data-reveal="left" data-delay=".4">← round.result</div>
                <div data-reveal="left" data-delay=".5">
                  {"→ payout "}
                  <span data-blink="">█</span>
                </div>
              </div>
            </section>
            <section id="inventory" data-hs-section="Inventory" style={{"flex":"none","position":"relative","width":"146vw","height":"100vh","display":"flex","alignItems":"center","gap":"3vw","padding":"10vh 5vw 9vh","boxSizing":"border-box"}}>
              <div style={{"flex":"none","width":"24vw","display":"flex","flexDirection":"column","gap":"3vh"}}>
                <div style={{"fontFamily":"'Silkscreen',monospace","fontSize":"16px"}}>World 02 — Work</div>
                <h2 data-skew="" style={{"margin":"0","fontSize":"clamp(64px,7.4vw,150px)","lineHeight":".82","fontWeight":"800","fontStretch":"75%","letterSpacing":"-.035em"}}>
                  {"Side"}
                  <br />
                  {"quests"}
                </h2>
              </div>
              <div style={{"display":"grid","gridTemplateColumns":"repeat(4,26vw)","gap":"14px"}}>
                <a href="https://friend-in-a-pocket.vercel.app/" target="_blank" data-reveal="up" style={{"border":"1px solid #fff","padding":"22px","height":"62vh","boxSizing":"border-box","display":"flex","flexDirection":"column","justifyContent":"space-between","background":"#000","transition":"background .25s,color .25s"}} className="hvB8">
                  <div style={{"display":"flex","justifyContent":"space-between","fontFamily":"'Silkscreen',monospace","fontSize":"12px"}}>
                    <span>Q-01</span>
                    <span>2026</span>
                  </div>
                  <div style={{"display":"flex","flexDirection":"column","gap":"14px"}}>
                    <div style={{"fontSize":"clamp(32px,3vw,56px)","fontWeight":"800","fontStretch":"75%","lineHeight":".9"}}>Friend in a Pocket</div>
                    <div style={{"fontSize":"15px","lineHeight":"1.45"}}>AI-powered personal growth PWA with real-time chat over WebSockets.</div>
                    <div style={{"fontFamily":"'Space Mono',monospace","fontSize":"12px"}}>Next.js · Node.js · Claude 3 Haiku</div>
                    <div style={{"fontFamily":"'Silkscreen',monospace","fontSize":"12px"}}>Live ↗</div>
                  </div>
                </a>
                <div data-reveal="up" data-delay=".08" data-hover="" style={{"border":"1px solid #fff","padding":"22px","height":"62vh","boxSizing":"border-box","display":"flex","flexDirection":"column","justifyContent":"space-between","background":"#000","transition":"background .25s,color .25s"}} className="hvB9">
                  <div style={{"display":"flex","justifyContent":"space-between","fontFamily":"'Silkscreen',monospace","fontSize":"12px"}}>
                    <span>Q-02</span>
                    <span>In progress</span>
                  </div>
                  <div style={{"display":"flex","flexDirection":"column","gap":"14px"}}>
                    <div style={{"fontSize":"clamp(32px,3vw,56px)","fontWeight":"800","fontStretch":"75%","lineHeight":".9"}}>CookBuddy</div>
                    <div style={{"fontSize":"15px","lineHeight":"1.45"}}>Mobile-first recipe app with Supabase auth, photos and comments.</div>
                    <div style={{"fontFamily":"'Space Mono',monospace","fontSize":"12px"}}>Expo · React Native · Supabase</div>
                  </div>
                </div>
                <div data-reveal="up" data-delay=".16" data-hover="" style={{"border":"1px solid #fff","padding":"22px","height":"62vh","boxSizing":"border-box","display":"flex","flexDirection":"column","justifyContent":"space-between","background":"#000","transition":"background .25s,color .25s"}} className="hvB10">
                  <div style={{"display":"flex","justifyContent":"space-between","fontFamily":"'Silkscreen',monospace","fontSize":"12px"}}>
                    <span>Q-03</span>
                    <span>Client</span>
                  </div>
                  <div style={{"display":"flex","flexDirection":"column","gap":"14px"}}>
                    <div style={{"fontSize":"clamp(32px,3vw,56px)","fontWeight":"800","fontStretch":"75%","lineHeight":".9"}}>Elada Gold</div>
                    <div style={{"fontSize":"15px","lineHeight":"1.45"}}>Website, wireframes, UI, brand palette and logo, designed and built from scratch.</div>
                    <div style={{"fontFamily":"'Space Mono',monospace","fontSize":"12px"}}>Next.js · Figma · Branding</div>
                  </div>
                </div>
                <a href="https://github.com/annarad111/hackathon2" target="_blank" data-reveal="up" data-delay=".24" style={{"border":"1px solid #fff","padding":"22px","height":"62vh","boxSizing":"border-box","display":"flex","flexDirection":"column","justifyContent":"space-between","background":"#000","transition":"background .25s,color .25s"}} className="hvB11">
                  <div style={{"display":"flex","justifyContent":"space-between","fontFamily":"'Silkscreen',monospace","fontSize":"12px"}}>
                    <span>Q-04</span>
                    <span>2nd prize</span>
                  </div>
                  <div style={{"display":"flex","flexDirection":"column","gap":"14px"}}>
                    <div style={{"fontSize":"clamp(32px,3vw,56px)","fontWeight":"800","fontStretch":"75%","lineHeight":".9"}}>Second Chance Foundation</div>
                    <div style={{"fontSize":"15px","lineHeight":"1.45"}}>Hackathon NGO app with Stripe donations, job listings and Google Maps.</div>
                    <div style={{"fontFamily":"'Space Mono',monospace","fontSize":"12px"}}>React · TypeScript · ASP.NET</div>
                    <div style={{"fontFamily":"'Silkscreen',monospace","fontSize":"12px"}}>GitHub ↗</div>
                  </div>
                </a>
              </div>
            </section>
            <section id="saves" data-hs-section="Save points" style={{"flex":"none","position":"relative","width":"170vw","height":"100vh","display":"flex","flexDirection":"column","justifyContent":"center","gap":"6vh","padding":"10vh 5vw 9vh","boxSizing":"border-box","background":"#fff","color":"#000"}}>
              <div style={{"display":"flex","alignItems":"flex-end","gap":"3vw"}}>
                <h2 data-skew="" style={{"margin":"0","fontSize":"clamp(64px,7.4vw,150px)","lineHeight":".82","fontWeight":"800","fontStretch":"75%","letterSpacing":"-.035em"}}>Save points</h2>
                <span style={{"fontFamily":"'Silkscreen',monospace","fontSize":"14px","paddingBottom":"8px","whiteSpace":"nowrap"}}>2016 → 2026</span>
              </div>
              <div style={{"position":"relative","display":"flex","gap":"2.4vw"}}>
                <div data-reveal="width" style={{"position":"absolute","left":"0","right":"0","top":"9px","height":"2px","background":"#000","transformOrigin":"0 50%"}} />
                <div data-reveal="up" style={{"flex":"none","width":"30vw","display":"flex","flexDirection":"column","gap":"12px"}}>
                  <div style={{"width":"20px","height":"20px","background":"#000"}} />
                  <div style={{"fontFamily":"'Silkscreen',monospace","fontSize":"12px"}}>Apr 2025 — May 2026</div>
                  <div style={{"fontSize":"clamp(28px,2.6vw,48px)","fontWeight":"800","fontStretch":"80%","lineHeight":"1"}}>TECVIVO / Las Vegas</div>
                  <div style={{"fontFamily":"'Space Mono',monospace","fontSize":"13px"}}>Frontend Developer</div>
                  <div style={{"fontSize":"15px","lineHeight":"1.5","maxWidth":"42ch"}}>Game engine for 14+ casino games. Built Olympian Odds and a Snakes and Ladders-style game from scratch.</div>
                </div>
                <div data-reveal="up" data-delay=".06" style={{"flex":"none","width":"26vw","display":"flex","flexDirection":"column","gap":"12px"}}>
                  <div style={{"width":"20px","height":"20px","border":"2px solid #000","boxSizing":"border-box","background":"#fff"}} />
                  <div style={{"fontFamily":"'Silkscreen',monospace","fontSize":"12px"}}>Mar 2023 — Apr 2025</div>
                  <div style={{"fontSize":"clamp(28px,2.6vw,48px)","fontWeight":"800","fontStretch":"80%","lineHeight":"1"}}>MindGeek / Aylo</div>
                  <div style={{"fontFamily":"'Space Mono',monospace","fontSize":"13px"}}>Frontend Developer</div>
                  <div style={{"fontSize":"15px","lineHeight":"1.5","maxWidth":"40ch"}}>React, Next.js, Redux in a microfrontend architecture. Jest tests. Owned an individual project.</div>
                </div>
                <div data-reveal="up" data-delay=".12" style={{"flex":"none","width":"24vw","display":"flex","flexDirection":"column","gap":"12px"}}>
                  <div style={{"width":"20px","height":"20px","border":"2px solid #000","boxSizing":"border-box","background":"#fff"}} />
                  <div style={{"fontFamily":"'Silkscreen',monospace","fontSize":"12px"}}>Jun 2022 — Mar 2023</div>
                  <div style={{"fontSize":"clamp(28px,2.6vw,48px)","fontWeight":"800","fontStretch":"80%","lineHeight":"1"}}>Canary Technology</div>
                  <div style={{"fontFamily":"'Space Mono',monospace","fontSize":"13px"}}>Frontend / Full-Stack</div>
                  <div style={{"fontSize":"15px","lineHeight":"1.5","maxWidth":"38ch"}}>React, Redux, Next.js, Node.js and GraphQL.</div>
                </div>
                <div data-reveal="up" data-delay=".18" style={{"flex":"none","width":"22vw","display":"flex","flexDirection":"column","gap":"12px"}}>
                  <div style={{"width":"20px","height":"20px","border":"2px solid #000","boxSizing":"border-box","background":"#fff"}} />
                  <div style={{"fontFamily":"'Silkscreen',monospace","fontSize":"12px"}}>Apr 2022 — Dec 2022</div>
                  <div style={{"fontSize":"clamp(28px,2.6vw,48px)","fontWeight":"800","fontStretch":"80%","lineHeight":"1"}}>Freelance</div>
                  <div style={{"fontFamily":"'Space Mono',monospace","fontSize":"13px"}}>Full-Stack · Part-time</div>
                </div>
                <div data-reveal="up" data-delay=".24" style={{"flex":"none","width":"22vw","display":"flex","flexDirection":"column","gap":"12px"}}>
                  <div style={{"width":"20px","height":"20px","border":"2px solid #000","boxSizing":"border-box","background":"#fff"}} />
                  <div style={{"fontFamily":"'Silkscreen',monospace","fontSize":"12px"}}>Aug 2021 — Mar 2022</div>
                  <div style={{"fontSize":"clamp(28px,2.6vw,48px)","fontWeight":"800","fontStretch":"80%","lineHeight":"1"}}>Algo Consulting</div>
                  <div style={{"fontFamily":"'Space Mono',monospace","fontSize":"13px"}}>Junior Full-Stack</div>
                </div>
                <div data-reveal="up" data-delay=".3" style={{"flex":"none","width":"22vw","display":"flex","flexDirection":"column","gap":"12px"}}>
                  <div style={{"width":"20px","height":"20px","border":"2px solid #000","boxSizing":"border-box","background":"#fff"}} />
                  <div style={{"fontFamily":"'Silkscreen',monospace","fontSize":"12px"}}>Nov 2016 — Mar 2021</div>
                  <div style={{"fontSize":"clamp(28px,2.6vw,48px)","fontWeight":"800","fontStretch":"80%","lineHeight":"1"}}>Art Paint Design</div>
                  <div style={{"fontFamily":"'Space Mono',monospace","fontSize":"13px"}}>Owner · team of 7</div>
                </div>
              </div>
            </section>
            <section id="player" data-hs-section="Player stats" style={{"flex":"none","position":"relative","width":"140vw","height":"100vh","display":"flex","alignItems":"center","gap":"4vw","padding":"10vh 5vw 9vh","boxSizing":"border-box"}}>
              <div style={{"flex":"none","width":"28vw","position":"relative"}}>
                <div data-reveal="clipup" style={{"position":"relative","width":"100%","height":"68vh","overflow":"hidden","border":"1px solid #fff"}}>
                  <img data-par="-0.08" src="https://anaradulescu.xyz/ana.jpeg" alt="Ana-Maria Rădulescu" style={{"position":"absolute","top":"0","left":"-12%","width":"124%","height":"100%","objectFit":"cover","filter":"grayscale(1) contrast(1.1)"}} />
                </div>
                <div style={{"position":"absolute","left":"12px","bottom":"12px","background":"#fff","color":"#000","padding":"6px 10px","fontFamily":"'Silkscreen',monospace","fontSize":"12px"}}>P1 · Ana-Maria</div>
              </div>
              <div style={{"flex":"none","width":"40vw","display":"flex","flexDirection":"column","gap":"3vh"}}>
                <div style={{"fontFamily":"'Silkscreen',monospace","fontSize":"16px"}}>About</div>
                <h2 style={{"margin":"0","fontSize":"clamp(44px,4.8vw,96px)","lineHeight":".88","fontWeight":"800","fontStretch":"75%","letterSpacing":"-.03em"}}>
                  <span style={{"display":"block","overflow":"hidden","paddingBottom":".12em","marginBottom":"-.12em"}}>
                    <span data-reveal="line" style={{"display":"block"}}>Developer by craft.</span>
                  </span>
                  <span style={{"display":"block","overflow":"hidden","paddingBottom":".12em","marginBottom":"-.12em"}}>
                    <span data-reveal="line" data-delay=".08" style={{"display":"block","fontWeight":"200"}}>Artist at heart.</span>
                  </span>
                </h2>
                <p data-reveal="up" data-delay=".15" style={{"margin":"0","fontSize":"17px","lineHeight":"1.55","maxWidth":"46ch","textWrap":"pretty"}}>{"I'm Ana-Maria, a Frontend Engineer working with React, TypeScript and Next.js. I build features from scratch, contribute to modular frontend architecture and integrate real-time functionality with WebSockets."}</p>
                <p data-reveal="up" data-delay=".22" style={{"margin":"0","fontSize":"17px","lineHeight":"1.55","maxWidth":"46ch","textWrap":"pretty"}}>Degree in Visual Arts from the National University of Arts. Before engineering, I ran my own business for over four years.</p>
              </div>
              <div style={{"flex":"none","width":"50vw","display":"grid","gridTemplateColumns":"repeat(2,minmax(0,1fr))","gap":"12px"}}>
                <div data-reveal="up" style={{"border":"1px solid #fff","padding":"16px"}}>
                  <div style={{"fontFamily":"'Silkscreen',monospace","fontSize":"12px","marginBottom":"10px"}}>Frontend</div>
                  <div style={{"fontFamily":"'Space Mono',monospace","fontSize":"13px","lineHeight":"1.6"}}>React · Next.js · TypeScript · JavaScript · Sass · Redux · Zustand</div>
                </div>
                <div data-reveal="up" data-delay=".06" style={{"border":"1px solid #fff","padding":"16px","background":"#fff","color":"#000"}}>
                  <div style={{"fontFamily":"'Silkscreen',monospace","fontSize":"12px","marginBottom":"10px"}}>{"Games & Real-time"}</div>
                  <div style={{"fontFamily":"'Space Mono',monospace","fontSize":"13px","lineHeight":"1.6"}}>PixiJS · State machines · WebSockets · Modular architecture · Microfrontends</div>
                </div>
                <div data-reveal="up" data-delay=".12" style={{"border":"1px solid #fff","padding":"16px"}}>
                  <div style={{"fontFamily":"'Silkscreen',monospace","fontSize":"12px","marginBottom":"10px"}}>{"Backend & Data"}</div>
                  <div style={{"fontFamily":"'Space Mono',monospace","fontSize":"13px","lineHeight":"1.6"}}>Node.js · REST · GraphQL · Supabase · .NET</div>
                </div>
                <div data-reveal="up" data-delay=".18" style={{"border":"1px solid #fff","padding":"16px"}}>
                  <div style={{"fontFamily":"'Silkscreen',monospace","fontSize":"12px","marginBottom":"10px"}}>Testing</div>
                  <div style={{"fontFamily":"'Space Mono',monospace","fontSize":"13px","lineHeight":"1.6"}}>Jest · Component testing · Mocks · Code reviews</div>
                </div>
                <div data-reveal="up" data-delay=".24" style={{"border":"1px solid #fff","padding":"16px"}}>
                  <div style={{"fontFamily":"'Silkscreen',monospace","fontSize":"12px","marginBottom":"10px"}}>Delivery</div>
                  <div style={{"fontFamily":"'Space Mono',monospace","fontSize":"13px","lineHeight":"1.6"}}>Git · GitHub Actions · GitLab CI/CD · Jira · Vercel</div>
                </div>
                <div data-reveal="up" data-delay=".3" style={{"border":"1px solid #fff","padding":"16px"}}>
                  <div style={{"fontFamily":"'Silkscreen',monospace","fontSize":"12px","marginBottom":"10px"}}>Design</div>
                  <div style={{"fontFamily":"'Space Mono',monospace","fontSize":"13px","lineHeight":"1.6"}}>Figma · UI/UX · Wireframing · Branding</div>
                </div>
              </div>
            </section>
            <section id="continue" data-hs-section="Continue?" style={{"flex":"none","position":"relative","width":"100vw","height":"100vh","display":"flex","flexDirection":"column","justifyContent":"center","alignItems":"center","textAlign":"center","gap":"5vh","padding":"10vh 5vw 9vh","boxSizing":"border-box","background":"#fff","color":"#000"}}>
              <div style={{"fontFamily":"'Silkscreen',monospace","fontSize":"18px","display":"flex","gap":"10px"}}>
                <span>Continue?</span>
                <span data-blink="">_</span>
              </div>
              <h2 style={{"margin":"0","fontSize":"clamp(60px,9vw,190px)","lineHeight":".84","fontWeight":"800","fontStretch":"75%","letterSpacing":"-.035em"}}>
                <span style={{"display":"block","overflow":"hidden","paddingBottom":".12em","marginBottom":"-.12em"}}>
                  <span data-reveal="line" style={{"display":"block"}}>{"Let's build"}</span>
                </span>
                <span style={{"display":"block","overflow":"hidden","paddingBottom":".12em","marginBottom":"-.12em"}}>
                  <span data-reveal="line" data-delay=".08" style={{"display":"block","fontWeight":"200"}}>something together.</span>
                </span>
              </h2>
              <a data-magnet="" href="mailto:radulescuana111@gmail.com" style={{"background":"#000","color":"#fff","padding":"18px 28px","fontFamily":"'Space Mono',monospace","fontSize":"clamp(16px,1.6vw,24px)"}}>radulescuana111@gmail.com ↗</a>
              <div style={{"display":"flex","gap":"12px","flexWrap":"wrap","justifyContent":"center","fontFamily":"'Silkscreen',monospace","fontSize":"13px"}}>
                <a data-magnet="" href="https://linkedin.com/in/radulescu-ana" target="_blank" style={{"border":"2px solid #000","padding":"12px 18px"}}>LinkedIn</a>
                <a data-magnet="" href="https://github.com/annarad111" target="_blank" style={{"border":"2px solid #000","padding":"12px 18px"}}>GitHub</a>
                <a data-magnet="" href="https://anaradulescu.xyz/cv-ana-radulescu.pdf" target="_blank" style={{"border":"2px solid #000","padding":"12px 18px","whiteSpace":"nowrap"}}>Download CV ↓</a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
