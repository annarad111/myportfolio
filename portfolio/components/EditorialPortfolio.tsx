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

export default function EditorialPortfolio({
  videoOlympian = '/videos/olympian-odds.mp4',
  videoMeteors = '/videos/meteors-rockets.mp4',
  motion = 1,
  smoothness = 0.08,
  customCursor = true,
  runner = true,
}: Props) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;
    document.body.style.background = '#ffffff';
    const hs = init(rootRef.current, { lerp: smoothness, par: motion, cursor: customCursor, runner });
    return () => hs.destroy();
  }, [smoothness, motion, customCursor, runner]);

  const olympianSrc = videoOlympian;
  const meteorsSrc = videoMeteors;

  return (
    <div ref={rootRef} style={{"fontFamily":"'Archivo',sans-serif","background":"#fff","color":"#0b0b0b"}}>
      <header style={{"position":"fixed","top":"0","left":"0","right":"0","zIndex":"30","display":"flex","alignItems":"center","justifyContent":"space-between","gap":"24px","padding":"22px 3vw","fontFamily":"'IBM Plex Mono',monospace","fontSize":"12px","letterSpacing":".06em","textTransform":"uppercase","color":"#fff","mixBlendMode":"difference"}}>
        <a href="#hero" data-goto="hero" style={{"fontWeight":"500"}}>Ana-Maria Rădulescu</a>
        <nav style={{"display":"flex","gap":"28px","flexWrap":"wrap"}}>
          <a href="#games" data-goto="games">Games</a>
          <a href="#work" data-goto="work">Work</a>
          <a href="#experience" data-goto="experience">Experience</a>
          <a href="#about" data-goto="about">About</a>
          <a href="#contact" data-goto="contact">Contact</a>
        </nav>
        <div style={{"display":"flex","gap":"16px"}}>
          <span data-hs-index="">01 / 09</span>
          <span data-hs-current="">Intro</span>
        </div>
      </header>
      <footer style={{"position":"fixed","left":"0","right":"0","bottom":"0","zIndex":"30","display":"flex","alignItems":"center","gap":"24px","padding":"20px 3vw","fontFamily":"'IBM Plex Mono',monospace","fontSize":"12px","letterSpacing":".06em","textTransform":"uppercase","color":"#fff","mixBlendMode":"difference"}}>
        <span>Scroll →</span>
        <div style={{"flex":"1","height":"1px","background":"rgba(255,255,255,.35)","position":"relative","overflow":"hidden"}}>
          <div data-hs-progress="" style={{"position":"absolute","inset":"0","background":"#fff","transformOrigin":"0 50%","transform":"scaleX(0)"}} />
        </div>
        <span style={{"display":"flex","alignItems":"center","gap":"8px"}}>
          <span style={{"width":"7px","height":"7px","borderRadius":"50%","background":"#fff"}} />
          {"Available for work"}
        </span>
      </footer>
      <div data-cursor="" style={{"position":"fixed","left":"0","top":"0","width":"14px","height":"14px","borderRadius":"50%","background":"#fff","mixBlendMode":"difference","pointerEvents":"none","zIndex":"40","willChange":"transform"}} />
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
        <div data-hs-sticky="" style={{"position":"sticky","top":"0","height":"100vh","overflow":"hidden"}}>
          <div data-hs-track="" style={{"position":"relative","display":"flex","height":"100vh","width":"max-content","willChange":"transform"}}>
            <section id="hero" data-hs-section="Intro" style={{"flex":"none","position":"relative","width":"132vw","height":"100vh","display":"flex","alignItems":"stretch","boxSizing":"border-box","padding":"0 0 0 3vw"}}>
              <div style={{"width":"78vw","display":"flex","flexDirection":"column","justifyContent":"center","paddingTop":"80px","paddingBottom":"70px","boxSizing":"border-box"}}>
                <div style={{"display":"flex","gap":"max(16px,2vw)","flexWrap":"nowrap","whiteSpace":"nowrap","fontFamily":"'IBM Plex Mono',monospace","fontSize":"max(10px,min(13px,1.2vw))","letterSpacing":".04em","textTransform":"uppercase"}}>
                  <span data-reveal="up">Frontend Engineer</span>
                  <span data-reveal="up" data-delay=".08">React · TypeScript · Next.js · PixiJS</span>
                  <span data-reveal="up" data-delay=".16">Belgium · Open to Remote EU</span>
                </div>
                <h1 style={{"margin":"2vh 0 0","fontSize":"max(38px,min(8.4vw,11vh))","lineHeight":".9","fontWeight":"800","fontStretch":"125%","letterSpacing":"-.045em"}}>
                  <span style={{"display":"block","overflow":"hidden","paddingBottom":".04em"}}>
                    <span data-reveal="line" style={{"display":"block"}}>I build games</span>
                  </span>
                  <span style={{"display":"block","overflow":"hidden","paddingBottom":".04em"}}>
                    <span data-reveal="line" data-delay=".09" style={{"display":"block"}}>{"& interfaces"}</span>
                  </span>
                  <span style={{"display":"block","overflow":"hidden","paddingBottom":".04em"}}>
                    <span data-reveal="line" data-delay=".18" style={{"display":"block"}}>
                      {"that "}
                      <span style={{"fontWeight":"200","fontStretch":"62%","letterSpacing":"-.02em"}}>move.</span>
                    </span>
                  </span>
                </h1>
                <div style={{"display":"flex","gap":"4vw","alignItems":"flex-end","marginTop":"3vh","flexWrap":"nowrap"}}>
                  <p data-reveal="up" data-delay=".35" style={{"flex":"1","minWidth":"0","margin":"0","maxWidth":"44ch","fontSize":"max(13px,min(15px,1.3vw))","lineHeight":"1.5","textWrap":"pretty"}}>Frontend Engineer with 5+ years of experience building web applications and interactive products with React, TypeScript and Next.js. Combines strong engineering skills with a visual design background.</p>
                  <div style={{"flex":"none","display":"flex","gap":"2.6vw"}}>
                    <div data-reveal="up" data-delay=".45">
                      <div style={{"fontSize":"max(26px,min(3.6vw,7vh))","fontWeight":"800","fontStretch":"125%","lineHeight":"1"}}>
                        <span data-reveal="count" data-count="14" data-suffix="+">14+</span>
                      </div>
                      <div style={{"fontFamily":"'IBM Plex Mono',monospace","fontSize":"11px","textTransform":"uppercase","marginTop":"8px","maxWidth":"14ch"}}>Games on a shared engine</div>
                    </div>
                    <div data-reveal="up" data-delay=".52">
                      <div style={{"fontSize":"max(26px,min(3.6vw,7vh))","fontWeight":"800","fontStretch":"125%","lineHeight":"1"}}>
                        <span data-reveal="count" data-count="2">2</span>
                      </div>
                      <div style={{"fontFamily":"'IBM Plex Mono',monospace","fontSize":"11px","textTransform":"uppercase","marginTop":"8px","maxWidth":"14ch"}}>Games built solo, from scratch</div>
                    </div>
                    <div data-reveal="up" data-delay=".59">
                      <div style={{"fontSize":"max(26px,min(3.6vw,7vh))","fontWeight":"800","fontStretch":"125%","lineHeight":"1"}}>
                        <span data-reveal="count" data-count="5" data-suffix="+">5+</span>
                      </div>
                      <div style={{"fontFamily":"'IBM Plex Mono',monospace","fontSize":"11px","textTransform":"uppercase","marginTop":"8px","maxWidth":"14ch"}}>Years in frontend</div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{"width":"50vw","display":"flex","flexDirection":"column","justifyContent":"center","gap":"14px","paddingTop":"4vh"}}>
                <div data-reveal="clip" data-delay=".25" style={{"position":"relative","width":"100%","height":"72vh","overflow":"hidden","background":"#0b0b0b"}}>
                  <video data-autoplay="" data-par="-0.12" src={olympianSrc} poster="https://anaradulescu.xyz/olympian-odds.png" muted loop playsInline style={{"position":"absolute","top":"0","left":"-12%","width":"124%","height":"100%","objectFit":"cover"}} />
                </div>
                <div style={{"display":"flex","justifyContent":"space-between","fontFamily":"'IBM Plex Mono',monospace","fontSize":"12px","textTransform":"uppercase"}}>
                  <span>Now playing — Olympian Odds</span>
                  <span>Gameplay, 2025</span>
                </div>
              </div>
            </section>
            <section id="games" data-hs-section="Games" style={{"flex":"none","position":"relative","width":"78vw","height":"100vh","background":"#0b0b0b","color":"#fff","display":"flex","flexDirection":"column","justifyContent":"center","padding":"0 6vw","boxSizing":"border-box","overflow":"hidden"}}>
              <div style={{"fontFamily":"'IBM Plex Mono',monospace","fontSize":"13px","textTransform":"uppercase","letterSpacing":".06em"}}>Chapter 01 — Games</div>
              <div data-skew="" style={{"transformOrigin":"0 100%"}}>
                <h2 data-par="0.18" style={{"margin":"2vh 0 0","fontSize":"clamp(90px,17vw,340px)","lineHeight":".82","fontWeight":"900","fontStretch":"125%","letterSpacing":"-.06em"}}>Games</h2>
              </div>
              <p data-reveal="up" data-delay=".1" style={{"margin":"5vh 0 0","maxWidth":"46ch","fontSize":"18px","lineHeight":"1.5","textWrap":"pretty"}}>Built at TECVIVO for a casino platform. Two games developed independently from scratch, running on a modular engine I helped build with the frontend team.</p>
              <div data-reveal="up" data-delay=".2" style={{"display":"flex","gap":"10px","flexWrap":"wrap","marginTop":"4vh","fontFamily":"'IBM Plex Mono',monospace","fontSize":"12px","textTransform":"uppercase"}}>
                <span style={{"border":"1px solid #fff","padding":"7px 12px"}}>React</span>
                <span style={{"border":"1px solid #fff","padding":"7px 12px"}}>TypeScript</span>
                <span style={{"border":"1px solid #fff","padding":"7px 12px"}}>PixiJS</span>
                <span style={{"border":"1px solid #fff","padding":"7px 12px"}}>WebSockets</span>
                <span style={{"border":"1px solid #fff","padding":"7px 12px"}}>State machines</span>
              </div>
            </section>
            <section id="olympian" data-hs-section="Olympian Odds" style={{"flex":"none","position":"relative","width":"140vw","height":"100vh","background":"#0b0b0b","color":"#fff","display":"flex","alignItems":"center","gap":"5vw","padding":"0 5vw 0 2vw","boxSizing":"border-box"}}>
              <div style={{"position":"relative","flex":"none","width":"min(84vw,128vh)"}}>
                <div style={{"display":"flex","justifyContent":"space-between","fontFamily":"'IBM Plex Mono',monospace","fontSize":"12px","textTransform":"uppercase","marginBottom":"14px"}}>
                  <span>Game 01 / 02</span>
                  <span>Built solo, from scratch</span>
                </div>
                <div data-reveal="clip" style={{"position":"relative","width":"100%","aspectRatio":"16/9","maxHeight":"66vh","overflow":"hidden","background":"#1a1a1a"}}>
                  <video data-autoplay="" data-par="-0.1" src={olympianSrc} poster="https://anaradulescu.xyz/olympian-odds.png" muted loop playsInline style={{"position":"absolute","top":"0","left":"-8%","width":"116%","height":"100%","objectFit":"cover"}} />
                </div>
              </div>
              <div style={{"flex":"none","width":"34vw","display":"flex","flexDirection":"column","gap":"2vh","padding":"70px 0 60px","boxSizing":"border-box"}}>
                <div data-skew="">
                  <h3 style={{"margin":"0","fontSize":"max(36px,min(5.6vw,9vh))","lineHeight":".86","fontWeight":"900","fontStretch":"125%","letterSpacing":"-.05em"}}>
                    {"Olympian"}
                    <br />
                    {"Odds"}
                  </h3>
                </div>
                <div data-reveal="up" style={{"fontSize":"clamp(20px,1.8vw,32px)","fontWeight":"700","fontStretch":"112%","lineHeight":"1.1","letterSpacing":"-.02em"}}>A world-map betting game.</div>
                <div style={{"display":"flex","flexDirection":"column","borderTop":"1px solid #fff"}}>
                  <div data-reveal="up" data-delay=".08" style={{"display":"grid","gridTemplateColumns":"44px 1fr","gap":"12px","padding":"max(8px,1.6vh) 0","borderBottom":"1px solid rgba(255,255,255,.4)","fontSize":"max(13px,min(16px,2.6vh))","lineHeight":"1.4"}}>
                    <span style={{"fontFamily":"'IBM Plex Mono',monospace","fontSize":"12px","paddingTop":"3px"}}>01</span>
                    <span>Interactive world map with country-based betting mechanics.</span>
                  </div>
                  <div data-reveal="up" data-delay=".16" style={{"display":"grid","gridTemplateColumns":"44px 1fr","gap":"12px","padding":"max(8px,1.6vh) 0","borderBottom":"1px solid rgba(255,255,255,.4)","fontSize":"max(13px,min(16px,2.6vh))","lineHeight":"1.4"}}>
                    <span style={{"fontFamily":"'IBM Plex Mono',monospace","fontSize":"12px","paddingTop":"3px"}}>02</span>
                    <span>{"Animated PNG sequences for the game's motion layer."}</span>
                  </div>
                  <div data-reveal="up" data-delay=".24" style={{"display":"grid","gridTemplateColumns":"44px 1fr","gap":"12px","padding":"max(8px,1.6vh) 0","borderBottom":"1px solid rgba(255,255,255,.4)","fontSize":"max(13px,min(16px,2.6vh))","lineHeight":"1.4"}}>
                    <span style={{"fontFamily":"'IBM Plex Mono',monospace","fontSize":"12px","paddingTop":"3px"}}>03</span>
                    <span>WebSocket communication, plus a Node.js mock backend to test gameplay before integration with production.</span>
                  </div>
                </div>
                <div data-reveal="up" data-delay=".32" style={{"fontFamily":"'IBM Plex Mono',monospace","fontSize":"12px","textTransform":"uppercase","letterSpacing":".04em"}}>React · TypeScript · WebSockets · Node.js</div>
              </div>
            </section>
            <section id="meteors" data-hs-section="Meteors & Rockets" style={{"flex":"none","position":"relative","width":"128vw","height":"100vh","background":"#0b0b0b","color":"#fff","display":"flex","alignItems":"center","gap":"5vw","padding":"0 4vw","boxSizing":"border-box","borderLeft":"1px solid rgba(255,255,255,.25)"}}>
              <div style={{"flex":"none","width":"34vw","display":"flex","flexDirection":"column","gap":"3vh"}}>
                <div data-reveal="up" style={{"fontFamily":"'IBM Plex Mono',monospace","fontSize":"12px","textTransform":"uppercase"}}>Game 02 / 02</div>
                <div data-skew="">
                  <h3 style={{"margin":"0","fontSize":"clamp(54px,6.6vw,140px)","lineHeight":".86","fontWeight":"900","fontStretch":"125%","letterSpacing":"-.05em"}}>
                    {"Meteors"}
                    <br />
                    {"& Rockets"}
                  </h3>
                </div>
                <div data-reveal="up" data-delay=".1" style={{"fontSize":"clamp(22px,2vw,34px)","fontWeight":"700","fontStretch":"112%","lineHeight":"1.1"}}>A grid-based game, built from scratch.</div>
                <div data-reveal="up" data-delay=".2" style={{"fontFamily":"'IBM Plex Mono',monospace","fontSize":"12px","textTransform":"uppercase","letterSpacing":".04em"}}>Next.js · PixiJS · TypeScript</div>
              </div>
              <div style={{"flex":"none","width":"min(80vw,120vh)"}}>
                <div data-reveal="clipup" style={{"position":"relative","width":"100%","aspectRatio":"16/9","maxHeight":"66vh","overflow":"hidden","background":"#1a1a1a"}}>
                  <video data-autoplay="" data-par="-0.1" src={meteorsSrc} poster="https://anaradulescu.xyz/meteors.jpeg" muted loop playsInline style={{"position":"absolute","top":"0","left":"-8%","width":"116%","height":"100%","objectFit":"cover"}} />
                </div>
                <div style={{"display":"flex","justifyContent":"space-between","fontFamily":"'IBM Plex Mono',monospace","fontSize":"12px","textTransform":"uppercase","marginTop":"14px"}}>
                  <span>Gameplay</span>
                  <span>TECVIVO, 2025</span>
                </div>
              </div>
            </section>
            <section id="engine" data-hs-section="Game Engine" style={{"flex":"none","position":"relative","width":"176vw","height":"100vh","background":"#0b0b0b","color":"#fff","display":"flex","alignItems":"center","gap":"6vw","padding":"0 6vw","boxSizing":"border-box","borderLeft":"1px solid rgba(255,255,255,.25)"}}>
              <div style={{"flex":"none","width":"34vw","display":"flex","flexDirection":"column","gap":"3vh"}}>
                <div data-reveal="up" style={{"fontFamily":"'IBM Plex Mono',monospace","fontSize":"12px","textTransform":"uppercase"}}>Architecture</div>
                <h3 style={{"margin":"0","fontSize":"clamp(48px,5.4vw,112px)","lineHeight":".9","fontWeight":"900","fontStretch":"125%","letterSpacing":"-.05em"}}>
                  <span style={{"display":"block","overflow":"hidden","paddingBottom":".12em","marginBottom":"-.12em"}}>
                    <span data-reveal="line" style={{"display":"block"}}>One engine,</span>
                  </span>
                  <span style={{"display":"block","overflow":"hidden","paddingBottom":".12em","marginBottom":"-.12em"}}>
                    <span data-reveal="line" data-delay=".08" style={{"display":"block"}}>14+ games.</span>
                  </span>
                </h3>
                <p data-reveal="up" data-delay=".15" style={{"margin":"0","fontSize":"16px","lineHeight":"1.5","maxWidth":"44ch","textWrap":"pretty"}}>A modular game engine supporting 14+ casino games, built around a shared template and state-machine architecture.</p>
                <p data-reveal="up" data-delay=".22" style={{"margin":"0","fontSize":"16px","lineHeight":"1.5","maxWidth":"44ch","textWrap":"pretty"}}>Reusable game infrastructure lets each game extend shared functionality with its own features, UI assets and visual themes.</p>
              </div>
              <div style={{"flex":"none","width":"66vw","display":"flex","flexDirection":"column","gap":"7vh"}}>
                <div>
                  <div style={{"fontFamily":"'IBM Plex Mono',monospace","fontSize":"12px","textTransform":"uppercase","marginBottom":"16px"}}>Game loop — state machine</div>
                  <div data-sm="" data-fg="#ffffff" data-bg="#0b0b0b" style={{"display":"flex","alignItems":"center","fontFamily":"'IBM Plex Mono',monospace","fontSize":"14px","textTransform":"uppercase"}}>
                    <span data-sm-node="" style={{"border":"1px solid #fff","padding":"14px 20px","transition":"background .3s,color .3s"}}>Idle</span>
                    <span style={{"flex":"1","height":"1px","background":"#fff"}} />
                    <span data-sm-node="" style={{"border":"1px solid #fff","padding":"14px 20px","transition":"background .3s,color .3s"}}>Bet</span>
                    <span style={{"flex":"1","height":"1px","background":"#fff"}} />
                    <span data-sm-node="" style={{"border":"1px solid #fff","padding":"14px 20px","transition":"background .3s,color .3s"}}>Round</span>
                    <span style={{"flex":"1","height":"1px","background":"#fff"}} />
                    <span data-sm-node="" style={{"border":"1px solid #fff","padding":"14px 20px","transition":"background .3s,color .3s"}}>Result</span>
                    <span style={{"flex":"1","height":"1px","background":"#fff"}} />
                    <span data-sm-node="" style={{"border":"1px solid #fff","padding":"14px 20px","transition":"background .3s,color .3s"}}>Payout</span>
                  </div>
                </div>
                <div>
                  <div style={{"fontFamily":"'IBM Plex Mono',monospace","fontSize":"12px","textTransform":"uppercase","marginBottom":"16px"}}>Shared template → game extensions</div>
                  <div style={{"display":"grid","gridTemplateColumns":"repeat(9,minmax(0,1fr))","gap":"8px"}}>
                    <div data-reveal="scale" style={{"gridColumn":"span 2","gridRow":"span 2","background":"#fff","color":"#0b0b0b","padding":"16px","display":"flex","flexDirection":"column","justifyContent":"space-between","fontFamily":"'IBM Plex Mono',monospace","fontSize":"12px","textTransform":"uppercase"}}>
                      <span>Core</span>
                      <span style={{"fontFamily":"'Archivo',sans-serif","fontSize":"22px","fontWeight":"800","fontStretch":"112%","textTransform":"none","lineHeight":"1"}}>Shared template</span>
                    </div>
                    <div data-reveal="scale" data-delay=".04" style={{"border":"1px solid #fff","aspectRatio":"1","boxSizing":"border-box","overflow":"hidden","background":"#fff","color":"#0b0b0b","padding":"6px","fontFamily":"'IBM Plex Mono',monospace","fontSize":"9px","textTransform":"uppercase","lineHeight":"1.3"}}>Olympian Odds</div>
                    <div data-reveal="scale" data-delay=".08" style={{"border":"1px solid #fff","aspectRatio":"1","boxSizing":"border-box","overflow":"hidden","background":"#fff","color":"#0b0b0b","padding":"6px","fontFamily":"'IBM Plex Mono',monospace","fontSize":"9px","textTransform":"uppercase","lineHeight":"1.3"}}>{"Meteors & Rockets"}</div>
                    <div data-reveal="scale" data-delay=".12" style={{"border":"1px solid #fff","aspectRatio":"1","boxSizing":"border-box","overflow":"hidden","padding":"10px","fontFamily":"'IBM Plex Mono',monospace","fontSize":"11px"}}>03</div>
                    <div data-reveal="scale" data-delay=".16" style={{"border":"1px solid #fff","aspectRatio":"1","boxSizing":"border-box","overflow":"hidden","padding":"10px","fontFamily":"'IBM Plex Mono',monospace","fontSize":"11px"}}>04</div>
                    <div data-reveal="scale" data-delay=".20" style={{"border":"1px solid #fff","aspectRatio":"1","boxSizing":"border-box","overflow":"hidden","padding":"10px","fontFamily":"'IBM Plex Mono',monospace","fontSize":"11px"}}>05</div>
                    <div data-reveal="scale" data-delay=".24" style={{"border":"1px solid #fff","aspectRatio":"1","boxSizing":"border-box","overflow":"hidden","padding":"10px","fontFamily":"'IBM Plex Mono',monospace","fontSize":"11px"}}>06</div>
                    <div data-reveal="scale" data-delay=".28" style={{"border":"1px solid #fff","aspectRatio":"1","boxSizing":"border-box","overflow":"hidden","padding":"10px","fontFamily":"'IBM Plex Mono',monospace","fontSize":"11px"}}>07</div>
                    <div data-reveal="scale" data-delay=".32" style={{"border":"1px solid #fff","aspectRatio":"1","boxSizing":"border-box","overflow":"hidden","padding":"10px","fontFamily":"'IBM Plex Mono',monospace","fontSize":"11px"}}>08</div>
                    <div data-reveal="scale" data-delay=".36" style={{"border":"1px solid #fff","aspectRatio":"1","boxSizing":"border-box","overflow":"hidden","padding":"10px","fontFamily":"'IBM Plex Mono',monospace","fontSize":"11px"}}>09</div>
                    <div data-reveal="scale" data-delay=".40" style={{"border":"1px solid #fff","aspectRatio":"1","boxSizing":"border-box","overflow":"hidden","padding":"10px","fontFamily":"'IBM Plex Mono',monospace","fontSize":"11px"}}>10</div>
                    <div data-reveal="scale" data-delay=".44" style={{"border":"1px solid #fff","aspectRatio":"1","boxSizing":"border-box","overflow":"hidden","padding":"10px","fontFamily":"'IBM Plex Mono',monospace","fontSize":"11px"}}>11</div>
                    <div data-reveal="scale" data-delay=".48" style={{"border":"1px solid #fff","aspectRatio":"1","boxSizing":"border-box","overflow":"hidden","padding":"10px","fontFamily":"'IBM Plex Mono',monospace","fontSize":"11px"}}>12</div>
                    <div data-reveal="scale" data-delay=".52" style={{"border":"1px solid #fff","aspectRatio":"1","boxSizing":"border-box","overflow":"hidden","padding":"10px","fontFamily":"'IBM Plex Mono',monospace","fontSize":"11px"}}>13</div>
                    <div data-reveal="scale" data-delay=".56" style={{"border":"1px solid #fff","aspectRatio":"1","boxSizing":"border-box","overflow":"hidden","padding":"10px","fontFamily":"'IBM Plex Mono',monospace","fontSize":"11px"}}>14+</div>
                  </div>
                </div>
              </div>
              <div style={{"flex":"none","width":"30vw","display":"flex","flexDirection":"column","gap":"16px"}}>
                <div style={{"fontFamily":"'IBM Plex Mono',monospace","fontSize":"12px","textTransform":"uppercase"}}>Real-time — WebSocket + Node.js mock</div>
                <div style={{"border":"1px solid #fff","padding":"22px","fontFamily":"'IBM Plex Mono',monospace","fontSize":"13px","lineHeight":"2"}}>
                  <div data-reveal="left" data-delay=".0">→ connect ws://mock-backend</div>
                  <div data-reveal="left" data-delay=".1">← session.ready</div>
                  <div data-reveal="left" data-delay=".2">{"→ bet.place { country }"}</div>
                  <div data-reveal="left" data-delay=".3">← round.start</div>
                  <div data-reveal="left" data-delay=".4">← round.result</div>
                  <div data-reveal="left" data-delay=".5" style={{"display":"flex","gap":"6px"}}>
                    {"→ payout "}
                    <span data-blink="">▍</span>
                  </div>
                </div>
                <p style={{"margin":"0","fontSize":"14px","lineHeight":"1.5","maxWidth":"40ch"}}>Gameplay tested against a local Node.js mock before integrating with the production backend.</p>
              </div>
            </section>
            <section id="work" data-hs-section="Work" style={{"flex":"none","position":"relative","width":"150vw","height":"100vh","display":"flex","alignItems":"center","gap":"3vw","padding":"0 6vw","boxSizing":"border-box"}}>
              <div style={{"flex":"none","width":"26vw","display":"flex","flexDirection":"column","gap":"3vh"}}>
                <div style={{"fontFamily":"'IBM Plex Mono',monospace","fontSize":"13px","textTransform":"uppercase","letterSpacing":".06em"}}>Chapter 02 — More work</div>
                <h2 style={{"margin":"0","fontSize":"clamp(56px,6.4vw,130px)","lineHeight":".86","fontWeight":"900","fontStretch":"125%","letterSpacing":"-.05em"}}>
                  <span style={{"display":"block","overflow":"hidden","paddingBottom":".12em","marginBottom":"-.12em"}}>
                    <span data-reveal="line" style={{"display":"block"}}>Things</span>
                  </span>
                  <span style={{"display":"block","overflow":"hidden","paddingBottom":".12em","marginBottom":"-.12em"}}>
                    <span data-reveal="line" data-delay=".08" style={{"display":"block"}}>{"I've built"}</span>
                  </span>
                </h2>
              </div>
              <div data-skew="" style={{"display":"flex","gap":"2vw"}}>
                <a href="https://friend-in-a-pocket.vercel.app/" target="_blank" data-reveal="up" style={{"flex":"none","width":"26vw","height":"66vh","border":"1px solid #0b0b0b","padding":"26px","boxSizing":"border-box","display":"flex","flexDirection":"column","justifyContent":"space-between","transition":"background .4s,color .4s"}} className="hvA1">
                  <div style={{"display":"flex","justifyContent":"space-between","fontFamily":"'IBM Plex Mono',monospace","fontSize":"12px","textTransform":"uppercase"}}>
                    <span>01</span>
                    <span>2026</span>
                  </div>
                  <div style={{"display":"flex","flexDirection":"column","gap":"14px"}}>
                    <div style={{"fontSize":"clamp(30px,2.8vw,52px)","fontWeight":"800","fontStretch":"118%","lineHeight":".95","letterSpacing":"-.03em"}}>Friend in a Pocket</div>
                    <div style={{"fontSize":"15px","lineHeight":"1.45"}}>AI-powered personal growth PWA with a real-time conversational assistant over WebSockets.</div>
                    <div style={{"fontFamily":"'IBM Plex Mono',monospace","fontSize":"11px","textTransform":"uppercase","opacity":".7"}}>Next.js · Node.js · Zustand · Claude 3 Haiku</div>
                    <div style={{"fontFamily":"'IBM Plex Mono',monospace","fontSize":"12px","textTransform":"uppercase"}}>Live ↗</div>
                  </div>
                </a>
                <div data-reveal="up" data-delay=".08" data-hover="" style={{"flex":"none","width":"26vw","height":"66vh","border":"1px solid #0b0b0b","padding":"26px","boxSizing":"border-box","display":"flex","flexDirection":"column","justifyContent":"space-between","transition":"background .4s,color .4s"}} className="hvA2">
                  <div style={{"display":"flex","justifyContent":"space-between","fontFamily":"'IBM Plex Mono',monospace","fontSize":"12px","textTransform":"uppercase"}}>
                    <span>02</span>
                    <span>In development</span>
                  </div>
                  <div style={{"display":"flex","flexDirection":"column","gap":"14px"}}>
                    <div style={{"fontSize":"clamp(30px,2.8vw,52px)","fontWeight":"800","fontStretch":"118%","lineHeight":".95","letterSpacing":"-.03em"}}>CookBuddy</div>
                    <div style={{"fontSize":"15px","lineHeight":"1.45"}}>Mobile-first recipe app with authentication, photos and comments persisted in Supabase.</div>
                    <div style={{"fontFamily":"'IBM Plex Mono',monospace","fontSize":"11px","textTransform":"uppercase","opacity":".7"}}>Expo · React Native · TypeScript · Supabase</div>
                  </div>
                </div>
                <div data-reveal="up" data-delay=".16" data-hover="" style={{"flex":"none","width":"26vw","height":"66vh","border":"1px solid #0b0b0b","padding":"26px","boxSizing":"border-box","display":"flex","flexDirection":"column","justifyContent":"space-between","transition":"background .4s,color .4s"}} className="hvA3">
                  <div style={{"display":"flex","justifyContent":"space-between","fontFamily":"'IBM Plex Mono',monospace","fontSize":"12px","textTransform":"uppercase"}}>
                    <span>03</span>
                    <span>Client</span>
                  </div>
                  <div style={{"display":"flex","flexDirection":"column","gap":"14px"}}>
                    <div style={{"fontSize":"clamp(30px,2.8vw,52px)","fontWeight":"800","fontStretch":"118%","lineHeight":".95","letterSpacing":"-.03em"}}>Elada Gold</div>
                    <div style={{"fontSize":"15px","lineHeight":"1.45"}}>Designed and developed from scratch: structure, wireframes, UI, brand palette and logo.</div>
                    <div style={{"fontFamily":"'IBM Plex Mono',monospace","fontSize":"11px","textTransform":"uppercase","opacity":".7"}}>Next.js · Figma · Branding · Vercel</div>
                  </div>
                </div>
                <a href="https://github.com/annarad111/hackathon2" target="_blank" data-reveal="up" data-delay=".24" style={{"flex":"none","width":"26vw","height":"66vh","border":"1px solid #0b0b0b","padding":"26px","boxSizing":"border-box","display":"flex","flexDirection":"column","justifyContent":"space-between","transition":"background .4s,color .4s"}} className="hvA4">
                  <div style={{"display":"flex","justifyContent":"space-between","fontFamily":"'IBM Plex Mono',monospace","fontSize":"12px","textTransform":"uppercase"}}>
                    <span>04</span>
                    <span>2022 · 2nd prize</span>
                  </div>
                  <div style={{"display":"flex","flexDirection":"column","gap":"14px"}}>
                    <div style={{"fontSize":"clamp(30px,2.8vw,52px)","fontWeight":"800","fontStretch":"118%","lineHeight":".95","letterSpacing":"-.03em"}}>Second Chance Foundation</div>
                    <div style={{"fontSize":"15px","lineHeight":"1.45"}}>NGO web app built during a hackathon, with Stripe donations, job listings and Google Maps.</div>
                    <div style={{"fontFamily":"'IBM Plex Mono',monospace","fontSize":"11px","textTransform":"uppercase","opacity":".7"}}>React · TypeScript · Redux · ASP.NET</div>
                    <div style={{"fontFamily":"'IBM Plex Mono',monospace","fontSize":"12px","textTransform":"uppercase"}}>GitHub ↗</div>
                  </div>
                </a>
              </div>
            </section>
            <section id="experience" data-hs-section="Experience" style={{"flex":"none","position":"relative","width":"184vw","height":"100vh","display":"flex","flexDirection":"column","justifyContent":"center","padding":"0 6vw","boxSizing":"border-box","borderLeft":"1px solid #0b0b0b"}}>
              <div style={{"display":"flex","alignItems":"flex-end","gap":"4vw","marginBottom":"7vh"}}>
                <h2 data-skew="" style={{"margin":"0","fontSize":"clamp(56px,7vw,150px)","lineHeight":".85","fontWeight":"900","fontStretch":"125%","letterSpacing":"-.05em"}}>Experience</h2>
                <span style={{"fontFamily":"'IBM Plex Mono',monospace","fontSize":"13px","textTransform":"uppercase","paddingBottom":"10px","whiteSpace":"nowrap"}}>2016 — 2026</span>
              </div>
              <div style={{"position":"relative"}}>
                <div data-reveal="width" style={{"position":"absolute","left":"0","right":"0","top":"0","height":"1px","background":"#0b0b0b","transformOrigin":"0 50%"}} />
                <div style={{"display":"flex","gap":"3vw","paddingTop":"4vh"}}>
                  <div data-reveal="up" style={{"flex":"none","width":"30vw","display":"flex","flexDirection":"column","gap":"12px"}}>
                    <div style={{"fontFamily":"'IBM Plex Mono',monospace","fontSize":"12px","textTransform":"uppercase"}}>Apr 2025 — May 2026</div>
                    <div style={{"fontSize":"clamp(28px,2.6vw,48px)","fontWeight":"800","fontStretch":"118%","lineHeight":"1","letterSpacing":"-.03em"}}>TECVIVO SRL / Las Vegas</div>
                    <div style={{"fontSize":"15px","fontWeight":"600"}}>Frontend Developer</div>
                    <div style={{"fontSize":"15px","lineHeight":"1.5","maxWidth":"42ch"}}>Modular game engine for 14+ casino games. Built Olympian Odds and a Snakes and Ladders-style game independently from scratch. Platform pages in React, Next.js and TypeScript.</div>
                  </div>
                  <div data-reveal="up" data-delay=".06" style={{"flex":"none","width":"26vw","display":"flex","flexDirection":"column","gap":"12px"}}>
                    <div style={{"fontFamily":"'IBM Plex Mono',monospace","fontSize":"12px","textTransform":"uppercase"}}>Mar 2023 — Apr 2025</div>
                    <div style={{"fontSize":"clamp(28px,2.6vw,48px)","fontWeight":"800","fontStretch":"118%","lineHeight":"1","letterSpacing":"-.03em"}}>MindGeek / Aylo</div>
                    <div style={{"fontSize":"15px","fontWeight":"600"}}>Frontend Developer</div>
                    <div style={{"fontSize":"15px","lineHeight":"1.5","maxWidth":"40ch"}}>React, Next.js and Redux features in a microfrontend architecture. Component tests with Jest. Owned an individual project end to end.</div>
                  </div>
                  <div data-reveal="up" data-delay=".12" style={{"flex":"none","width":"24vw","display":"flex","flexDirection":"column","gap":"12px"}}>
                    <div style={{"fontFamily":"'IBM Plex Mono',monospace","fontSize":"12px","textTransform":"uppercase"}}>Jun 2022 — Mar 2023</div>
                    <div style={{"fontSize":"clamp(28px,2.6vw,48px)","fontWeight":"800","fontStretch":"118%","lineHeight":"1","letterSpacing":"-.03em"}}>Canary Technology</div>
                    <div style={{"fontSize":"15px","fontWeight":"600"}}>Frontend / Full-Stack Developer</div>
                    <div style={{"fontSize":"15px","lineHeight":"1.5","maxWidth":"38ch"}}>React, Redux and Next.js, with Node.js and GraphQL integration.</div>
                  </div>
                  <div data-reveal="up" data-delay=".18" style={{"flex":"none","width":"22vw","display":"flex","flexDirection":"column","gap":"12px"}}>
                    <div style={{"fontFamily":"'IBM Plex Mono',monospace","fontSize":"12px","textTransform":"uppercase"}}>Apr 2022 — Dec 2022</div>
                    <div style={{"fontSize":"clamp(28px,2.6vw,48px)","fontWeight":"800","fontStretch":"118%","lineHeight":"1","letterSpacing":"-.03em"}}>Freelance</div>
                    <div style={{"fontSize":"15px","fontWeight":"600"}}>Full-Stack Developer · Part-time</div>
                    <div style={{"fontSize":"15px","lineHeight":"1.5","maxWidth":"36ch"}}>React, Next.js, Node.js, GraphQL and .NET for client applications.</div>
                  </div>
                  <div data-reveal="up" data-delay=".24" style={{"flex":"none","width":"22vw","display":"flex","flexDirection":"column","gap":"12px"}}>
                    <div style={{"fontFamily":"'IBM Plex Mono',monospace","fontSize":"12px","textTransform":"uppercase"}}>Aug 2021 — Mar 2022</div>
                    <div style={{"fontSize":"clamp(28px,2.6vw,48px)","fontWeight":"800","fontStretch":"118%","lineHeight":"1","letterSpacing":"-.03em"}}>Algo Consulting</div>
                    <div style={{"fontSize":"15px","fontWeight":"600"}}>Junior Full-Stack Developer</div>
                  </div>
                  <div data-reveal="up" data-delay=".3" style={{"flex":"none","width":"22vw","display":"flex","flexDirection":"column","gap":"12px"}}>
                    <div style={{"fontFamily":"'IBM Plex Mono',monospace","fontSize":"12px","textTransform":"uppercase"}}>Nov 2016 — Mar 2021</div>
                    <div style={{"fontSize":"clamp(28px,2.6vw,48px)","fontWeight":"800","fontStretch":"118%","lineHeight":"1","letterSpacing":"-.03em"}}>Art Paint Design</div>
                    <div style={{"fontSize":"15px","fontWeight":"600"}}>Owner / Business Manager</div>
                    <div style={{"fontSize":"15px","lineHeight":"1.5","maxWidth":"36ch"}}>Managed a team of seven. Process improvements with a reported 10% efficiency gain.</div>
                  </div>
                </div>
              </div>
            </section>
            <section id="about" data-hs-section="About" style={{"flex":"none","position":"relative","width":"150vw","height":"100vh","display":"flex","alignItems":"center","gap":"5vw","padding":"0 6vw","boxSizing":"border-box","borderLeft":"1px solid #0b0b0b"}}>
              <div data-reveal="clipup" style={{"flex":"none","position":"relative","width":"30vw","height":"74vh","overflow":"hidden","background":"#e6e6e6"}}>
                <img data-par="-0.1" src="https://anaradulescu.xyz/ana.jpeg" alt="Ana-Maria Rădulescu" style={{"position":"absolute","top":"0","left":"-15%","width":"130%","height":"100%","objectFit":"cover","filter":"grayscale(1) contrast(1.05)"}} />
              </div>
              <div style={{"flex":"none","width":"44vw","display":"flex","flexDirection":"column","gap":"3vh"}}>
                <div style={{"fontFamily":"'IBM Plex Mono',monospace","fontSize":"13px","textTransform":"uppercase","letterSpacing":".06em"}}>About</div>
                <h2 style={{"margin":"0","fontSize":"clamp(40px,4.4vw,88px)","lineHeight":".92","fontWeight":"800","fontStretch":"118%","letterSpacing":"-.04em"}}>
                  <span style={{"display":"block","overflow":"hidden","paddingBottom":".12em","marginBottom":"-.12em"}}>
                    <span data-reveal="line" style={{"display":"block"}}>Engineer by craft.</span>
                  </span>
                  <span style={{"display":"block","overflow":"hidden","paddingBottom":".12em","marginBottom":"-.12em"}}>
                    <span data-reveal="line" data-delay=".08" style={{"display":"block","fontWeight":"200","fontStretch":"75%"}}>Artist at heart.</span>
                  </span>
                </h2>
                <p data-reveal="up" data-delay=".15" style={{"margin":"0","fontSize":"17px","lineHeight":"1.55","maxWidth":"48ch","textWrap":"pretty"}}>{"I'm Ana-Maria, a Frontend Engineer working with React, TypeScript and Next.js. I build features from scratch, contribute to modular frontend architecture and integrate real-time functionality with WebSockets."}</p>
                <p data-reveal="up" data-delay=".22" style={{"margin":"0","fontSize":"17px","lineHeight":"1.55","maxWidth":"48ch","textWrap":"pretty"}}>I hold a degree in Visual Arts from the National University of Arts. Before engineering, I ran my own business for over four years. Both shape how I design and own the products I work on.</p>
              </div>
              <div style={{"flex":"none","width":"52vw","display":"grid","gridTemplateColumns":"repeat(3,minmax(0,1fr))","gap":"4vh 2.4vw"}}>
                <div data-reveal="up" style={{"borderTop":"1px solid #0b0b0b","paddingTop":"14px"}}>
                  <div style={{"fontFamily":"'IBM Plex Mono',monospace","fontSize":"12px","textTransform":"uppercase","marginBottom":"10px"}}>Frontend</div>
                  <div style={{"fontSize":"15px","lineHeight":"1.55"}}>React · Next.js · TypeScript · JavaScript · HTML5 · CSS3 · Sass · Redux · Zustand</div>
                </div>
                <div data-reveal="up" data-delay=".06" style={{"borderTop":"1px solid #0b0b0b","paddingTop":"14px"}}>
                  <div style={{"fontFamily":"'IBM Plex Mono',monospace","fontSize":"12px","textTransform":"uppercase","marginBottom":"10px"}}>{"Architecture & Real-time"}</div>
                  <div style={{"fontSize":"15px","lineHeight":"1.55"}}>Modular architecture · Microfrontends · State machines · WebSockets · PixiJS</div>
                </div>
                <div data-reveal="up" data-delay=".12" style={{"borderTop":"1px solid #0b0b0b","paddingTop":"14px"}}>
                  <div style={{"fontFamily":"'IBM Plex Mono',monospace","fontSize":"12px","textTransform":"uppercase","marginBottom":"10px"}}>{"Backend & Data"}</div>
                  <div style={{"fontSize":"15px","lineHeight":"1.55"}}>Node.js · REST APIs · GraphQL · Supabase · .NET</div>
                </div>
                <div data-reveal="up" data-delay=".18" style={{"borderTop":"1px solid #0b0b0b","paddingTop":"14px"}}>
                  <div style={{"fontFamily":"'IBM Plex Mono',monospace","fontSize":"12px","textTransform":"uppercase","marginBottom":"10px"}}>{"Testing & Quality"}</div>
                  <div style={{"fontSize":"15px","lineHeight":"1.55"}}>Jest · Component testing · Mocks · Debugging · Code reviews</div>
                </div>
                <div data-reveal="up" data-delay=".24" style={{"borderTop":"1px solid #0b0b0b","paddingTop":"14px"}}>
                  <div style={{"fontFamily":"'IBM Plex Mono',monospace","fontSize":"12px","textTransform":"uppercase","marginBottom":"10px"}}>{"Tools & Delivery"}</div>
                  <div style={{"fontSize":"15px","lineHeight":"1.55"}}>Git · GitHub Actions · GitLab CI/CD · Jira · Vercel</div>
                </div>
                <div data-reveal="up" data-delay=".3" style={{"borderTop":"1px solid #0b0b0b","paddingTop":"14px"}}>
                  <div style={{"fontFamily":"'IBM Plex Mono',monospace","fontSize":"12px","textTransform":"uppercase","marginBottom":"10px"}}>{"Design & Product"}</div>
                  <div style={{"fontSize":"15px","lineHeight":"1.55"}}>Figma · UI/UX · Wireframing · Visual design · Branding · Product strategy</div>
                </div>
              </div>
            </section>
            <section id="contact" data-hs-section="Contact" style={{"flex":"none","position":"relative","width":"100vw","height":"100vh","background":"#0b0b0b","color":"#fff","display":"flex","flexDirection":"column","justifyContent":"center","padding":"0 6vw","boxSizing":"border-box"}}>
              <div style={{"fontFamily":"'IBM Plex Mono',monospace","fontSize":"13px","textTransform":"uppercase","letterSpacing":".06em"}}>Contact</div>
              <h2 style={{"margin":"3vh 0 0","fontSize":"clamp(56px,8.4vw,170px)","lineHeight":".88","fontWeight":"900","fontStretch":"125%","letterSpacing":"-.05em"}}>
                <span style={{"display":"block","overflow":"hidden","paddingBottom":".12em","marginBottom":"-.12em"}}>
                  <span data-reveal="line" style={{"display":"block"}}>{"Let's build"}</span>
                </span>
                <span style={{"display":"block","overflow":"hidden","paddingBottom":".12em","marginBottom":"-.12em"}}>
                  <span data-reveal="line" data-delay=".08" style={{"display":"block","fontWeight":"200","fontStretch":"62%"}}>something together.</span>
                </span>
              </h2>
              <div style={{"display":"flex","marginTop":"7vh"}}>
                <a data-magnet="" href="mailto:radulescuana111@gmail.com" style={{"fontSize":"clamp(22px,2.6vw,46px)","fontWeight":"600","fontStretch":"112%","borderBottom":"2px solid #fff","paddingBottom":"6px"}}>radulescuana111@gmail.com ↗</a>
              </div>
              <div style={{"display":"flex","gap":"28px","flexWrap":"wrap","marginTop":"5vh","fontFamily":"'IBM Plex Mono',monospace","fontSize":"13px","textTransform":"uppercase"}}>
                <a data-magnet="" href="https://linkedin.com/in/radulescu-ana" target="_blank" style={{"border":"1px solid #fff","padding":"12px 18px"}}>LinkedIn ↗</a>
                <a data-magnet="" href="https://github.com/annarad111" target="_blank" style={{"border":"1px solid #fff","padding":"12px 18px"}}>GitHub ↗</a>
                <a data-magnet="" href="https://anaradulescu.xyz/cv-ana-radulescu.pdf" target="_blank" style={{"border":"1px solid #fff","padding":"12px 18px","background":"#fff","color":"#0b0b0b","whiteSpace":"nowrap"}}>Download CV ↓</a>
              </div>
              <div style={{"position":"absolute","right":"6vw","top":"max(80px,12vh)","fontFamily":"'IBM Plex Mono',monospace","fontSize":"12px","textTransform":"uppercase"}}>Ana-Maria Rădulescu © 2026</div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
