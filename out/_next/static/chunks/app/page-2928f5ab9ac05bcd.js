(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1187:function(e,a,s){Promise.resolve().then(s.bind(s,5503))},5503:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return Home}});var o=s(7437),t=s(6691),i=s.n(t),r=s(2176),n=s(2265),l=s(4702);let c=window.matchMedia("(prefers-reduced-motion: reduce)").matches;function ScrollReveal(e){let{children:a,animation:s="fadeIn",delay:t=0,threshold:i=.1}=e,{ref:r,inView:d}=(0,l.YD)({triggerOnce:!0,threshold:i,rootMargin:"50px"}),x=(0,n.useRef)(null);return((0,n.useEffect)(()=>{if(x.current){if(c){x.current.style.opacity="1";return}return d&&requestAnimationFrame(()=>{x.current&&(x.current.style.animationDelay="".concat(t,"s"),x.current.style.willChange="opacity",x.current.classList.add("fadeIn"===s?"animate-fade-in":"slideUp"===s?"animate-slide-up":"animate-scale-in"))}),()=>{x.current&&(x.current.style.willChange="auto")}}},[d,s,t]),c)?(0,o.jsx)(o.Fragment,{children:a}):(0,o.jsx)("div",{ref:r,children:(0,o.jsx)("div",{ref:x,style:{opacity:0,transform:"translateZ(0)",minHeight:"min-content",contentVisibility:"auto"},children:a})})}function Hero(){let e=encodeURIComponent("Oi, quero falar com um especialista sobre meu caso");return(0,o.jsx)("header",{className:"relative flex justify-center items-center parallax bg-white",role:"banner",children:(0,o.jsxs)(ScrollReveal,{animation:"slideUp",delay:.2,children:[(0,o.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-white/90 to-white/70 z-10","aria-hidden":"true"}),(0,o.jsx)("div",{className:"hidden md:block absolute inset-0 w-full h-full",children:(0,o.jsx)(i(),{src:"/logo.webp",alt:"Professional law office environment",fill:!0,className:"object-contain",priority:!0,quality:75,sizes:"(max-width: 768px) 100vw, 50vw"})}),(0,o.jsx)("div",{className:"container mx-auto  relative z-20",children:(0,o.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 items-center",children:[(0,o.jsxs)("div",{className:"lg:order-2 lg:col-start-2",children:[(0,o.jsx)("div",{className:"md:hidden aspect-[4/3] relative",children:(0,o.jsx)(i(),{src:"/hero-mobile.webp",alt:"Advogado especialista em direito previdenci\xe1rio",fill:!0,className:"object-cover mt-4",priority:!0,quality:75,sizes:"100vw"})}),(0,o.jsx)("div",{className:"hidden md:block relative w-full aspect-[3/4] max-w-[500px] mx-auto",children:(0,o.jsx)(i(),{src:"/hero1.webp",alt:"Advogado especialista em direito previdenci\xe1rio",fill:!0,className:"object-cover",priority:!0,quality:75,placeholder:"blur",blurDataURL:"data:image/jpeg;base64,...",sizes:"(max-width: 360px) 360px, (max-width: 640px) 640px, (max-width: 750px) 750px, 500px"})})]}),(0,o.jsxs)("div",{className:"lg:order-1 px-4 max-w-2xl space-y-8",children:[(0,o.jsxs)("h1",{className:"text-4xl md:text-6xl lg:text-7xl font-bold text-[#1A1A1A] space-y-2",children:[(0,o.jsx)("span",{className:"block",children:"ESPECIALISTA EM"}),(0,o.jsxs)("span",{className:"text-[#957D56] block",children:["DIREITO",(0,o.jsx)("br",{}),"PREVIDENCI\xc1RIO"]})]}),(0,o.jsxs)("p",{className:"text-xl md:text-2xl text-[#1A1A1A] max-w-2xl",children:["Garantimos seus direitos junto ao INSS com"," ",(0,o.jsx)("span",{className:"text-[#957D56]",children:"mais de 360 benef\xedcios conquistados"})," para nossos clientes."]}),(0,o.jsxs)("div",{className:"space-y-8",children:[(0,o.jsx)("p",{className:"text-lg text-[#4A4A4A]",children:"Teve benef\xedcio negado? Precisa se aposentar? Nossa equipe especializada est\xe1 pronta para ajudar."}),(0,o.jsxs)("a",{href:"https://wa.me/5517996088520?text=".concat(e),target:"_blank",rel:"noopener noreferrer",className:"bg-[#7A6545] text-white inline-flex items-center gap-2 hover:bg-[#5E4D35] px-6 py-3 rounded-lg transition-colors",role:"button","aria-label":"Falar com especialista via WhatsApp",children:[(0,o.jsx)(r.Z,{className:"w-5 h-5","aria-hidden":"true"}),"GARANTA SEUS DIREITOS AGORA"]})]})]})]})})]})})}var d=s(7712),x=s(2645),m=s(1393);function StatCounter(e){let{endValue:a,label:s,prefix:t="+",suffix:i="",decimals:r=0}=e,[c,u]=(0,n.useState)(0),p=(0,d._)(),{ref:h,inView:f}=(0,l.YD)({triggerOnce:!0,threshold:.5});return(0,n.useEffect)(()=>{if(f){let e;let animate=s=>{e||(e=s);let o=s-e,t=Math.min(o/2e3,1),i=(1-Math.pow(1-t,4))*a;u(i),t<1&&requestAnimationFrame(animate)};requestAnimationFrame(animate),p.start({opacity:1,y:0})}},[f,a,p]),(0,o.jsxs)(x.E.div,{ref:h,initial:{opacity:0,y:20},animate:p,className:"text-center",children:[(0,o.jsx)(m.M,{children:f&&(0,o.jsxs)(x.E.div,{initial:{opacity:0},animate:{opacity:1},className:"text-4xl md:text-5xl font-bold text-[#957D56] mb-2",children:[t,r>0?c.toFixed(r):Math.round(c).toLocaleString(),i]})}),(0,o.jsx)("p",{className:"text-sm md:text-base text-[#4A4A4A] whitespace-pre-line",children:s})]})}function Stats(){return(0,o.jsx)("section",{className:"py-24 bg-[#faf6ec]",children:(0,o.jsx)("div",{className:"container mx-auto px-4 max-w-5xl",children:(0,o.jsx)("div",{className:"bg-gray-50 rounded-2xl border border-[#3E4A46]/20 p-8 md:p-12 shadow-card hover:shadow-card-hover hover:border-[#957D56] transition-all duration-300",children:(0,o.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12",children:[{value:647,label:"Clientes\nAtendidos",prefix:"+",suffix:""},{value:521,label:"Processos\nFinalizados",prefix:"+",suffix:""},{value:360,label:"Benef\xedcios\nConcedidos",prefix:"+",suffix:""}].map((e,a)=>(0,o.jsx)(StatCounter,{endValue:e.value,label:e.label,prefix:e.prefix,suffix:e.suffix,decimals:0},a))})})})})}var u=s(4893),p=s(5750),h=s(9057),f=s(9278),v=s(2242),b=s(6494),j=s(3523);function AreasExpertise(){let[e,a]=(0,n.useState)(null),s=[{icon:u.Z,title:"Previd\xeancia Social",description:"Especialistas em benef\xedcios previdenci\xe1rios e aposentadorias",content:"Nossa equipe possui vasta experi\xeancia em todos os tipos de benef\xedcios previdenci\xe1rios, incluindo aposentadorias, aux\xedlio-doen\xe7a, pens\xe3o por morte e BPC/LOAS. Oferecemos an\xe1lise detalhada do seu caso e orienta\xe7\xe3o personalizada para garantir seus direitos junto ao INSS."},{icon:p.Z,title:"Consumidor",description:"Defesa dos seus direitos nas rela\xe7\xf5es de consumo",content:"Atuamos na prote\xe7\xe3o dos seus direitos como consumidor, tratando de casos que envolvem problemas com produtos e servi\xe7os, cobran\xe7as indevidas, negativa\xe7\xe3o irregular e quest\xf5es contratuais. Buscamos sempre a resolu\xe7\xe3o mais eficiente para cada situa\xe7\xe3o."},{icon:h.Z,title:"C\xedvel",description:"Resolu\xe7\xe3o de conflitos e prote\xe7\xe3o dos seus interesses",content:"Oferecemos assessoria jur\xeddica completa em quest\xf5es c\xedveis, incluindo contratos, responsabilidade civil, indeniza\xe7\xf5es e cobran\xe7as. Nossa atua\xe7\xe3o visa sempre a melhor solu\xe7\xe3o para seu caso, seja pela via judicial ou extrajudicial."},{icon:f.Z,title:"Trabalhista",description:"Garantia dos seus direitos nas rela\xe7\xf5es de trabalho",content:"Defendemos seus direitos trabalhistas com expertise e dedica\xe7\xe3o, tratando de quest\xf5es como verbas rescis\xf3rias, horas extras, ass\xe9dio moral, acidentes de trabalho e reconhecimento de v\xednculo empregat\xedcio."},{icon:v.Z,title:"Fam\xedlia",description:"Suporte jur\xeddico em quest\xf5es familiares",content:"Prestamos assist\xeancia em todas as quest\xf5es do direito de fam\xedlia, como div\xf3rcio, guarda de filhos, pens\xe3o aliment\xedcia, invent\xe1rio e testamento. Nosso atendimento \xe9 humanizado e focado na resolu\xe7\xe3o pac\xedfica dos conflitos."},{icon:b.Z,title:"Sucess\xf5es",description:"Orienta\xe7\xe3o especializada em heran\xe7as e invent\xe1rios",content:"Auxiliamos em todo o processo sucess\xf3rio, desde a abertura do invent\xe1rio at\xe9 a partilha dos bens, incluindo testamentos, arrolamentos e invent\xe1rios extrajudiciais. Garantimos uma condu\xe7\xe3o eficiente e segura do seu processo."}],handleCardClick=s=>{a(e===s?null:s)};return(0,o.jsx)("section",{className:"section-padding bg-[#faf6ec]",children:(0,o.jsxs)("div",{className:"container mx-auto px-4",children:[(0,o.jsx)(ScrollReveal,{children:(0,o.jsxs)("h2",{className:"text-center p-2 mb-16",children:[(0,o.jsx)("span",{className:"block text-[#957D56] text-4xl md:text-5xl font-bold",children:"\xc1REAS DE ATUA\xc7\xc3O"}),(0,o.jsx)("span",{className:"text-[#4A4A4A] text-xl mt-4 block",children:"Al\xe9m da previd\xeancia social, atendemos outras \xe1reas"})]})}),(0,o.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto",children:s.map((a,s)=>(0,o.jsx)(ScrollReveal,{delay:.1*s,children:(0,o.jsxs)("div",{"aria-expanded":e===s,className:"bg-gray-50 border border-[#3E4A46]/20 rounded-xl overflow-hidden hover:border-[#957D56] transition-all duration-300 group cursor-pointer",onClick:()=>handleCardClick(s),role:"button","aria-controls":"card-content-".concat(s),tabIndex:0,onKeyDown:e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),handleCardClick(s))},children:[(0,o.jsx)("div",{className:"p-8",children:(0,o.jsxs)("div",{className:"flex flex-col items-center text-center",children:[(0,o.jsx)("div",{className:"p-4 bg-[#957D56]/10 rounded-full mb-6  group-hover:bg-[#957D56]/20 transition-all duration-300",children:(0,o.jsx)(a.icon,{className:"w-8 h-8 text-[#957D56]"})}),(0,o.jsxs)("h3",{className:"text-xl font-semibold mb-3 text-[#1A1A1A] flex items-center gap-2",children:[a.title,(0,o.jsx)(j.Z,{className:"w-5 h-5 text-[#957D56] transition-transform duration-300\n                                  ".concat(e===s?"rotate-180":"")})]})]})}),(0,o.jsx)("div",{id:"card-content-".concat(s),className:"px-8 transition-all duration-300 ease-in-out\n                            ".concat(e===s?"max-h-[500px] pb-8 opacity-100":"max-h-0 overflow-hidden opacity-0"),role:"region","aria-labelledby":"card-title-".concat(s),children:(0,o.jsxs)("div",{className:"border-t border-[#3E4A46]/20 pt-4 mt-2",children:[(0,o.jsx)("p",{className:"text-[#4A4A4A] text-left mb-4",children:a.description}),(0,o.jsx)("p",{className:"text-[#4A4A4A] text-left",children:a.content})]})})]})},s))})]})})}function FAQ(){let[e,a]=(0,n.useState)(null);return(0,o.jsx)("section",{className:"section-padding bg-[#faf6ec]",children:(0,o.jsxs)("div",{className:"container mx-auto px-4",children:[(0,o.jsx)(ScrollReveal,{children:(0,o.jsxs)("h2",{className:"text-center mb-12",children:[(0,o.jsx)("span",{className:"block text-[#957D56] text-4xl md:text-5xl font-bold",children:"D\xdaVIDAS FREQUENTES"}),(0,o.jsx)("span",{className:"text-[#4A4A4A] text-xl mt-4 block",children:"Esclarecemos suas principais d\xfavidas sobre direito previdenci\xe1rio"})]})}),(0,o.jsx)("div",{className:"max-w-3xl mx-auto space-y-4",children:[{question:"Como funciona a primeira consulta?",answer:"Na primeira consulta, analisamos sua situa\xe7\xe3o junto ao INSS, verificamos documentos e tra\xe7amos a melhor estrat\xe9gia para seu caso. Voc\xea receber\xe1 todas as orienta\xe7\xf5es necess\xe1rias para prosseguir com o processo."},{question:"Quanto tempo demora para conseguir um benef\xedcio do INSS?",answer:"O prazo pode variar conforme o tipo de benef\xedcio e a complexidade do caso. Em geral, o INSS tem at\xe9 45 dias para analisar um pedido de benef\xedcio. Em caso de negativa, o processo judicial pode levar de 6 meses a 2 anos, dependendo da regi\xe3o e do tribunal."},{question:"Quais documentos s\xe3o necess\xe1rios para dar entrada em um benef\xedcio?",answer:"Os documentos b\xe1sicos incluem RG, CPF, comprovante de resid\xeancia e carteira de trabalho. Documentos espec\xedficos variam conforme o benef\xedcio: laudos m\xe9dicos para aux\xedlio-doen\xe7a, certid\xe3o de \xf3bito para pens\xe3o por morte, comprovantes de contribui\xe7\xe3o para aposentadoria, entre outros."},{question:"Como s\xe3o cobrados os honor\xe1rios advocat\xedcios?",answer:"Trabalhamos com honor\xe1rios de \xeaxito, ou seja, s\xf3 recebemos quando voc\xea ganhar. O percentual \xe9 calculado sobre os valores atrasados que voc\xea tem direito a receber, sem comprometer seu benef\xedcio mensal futuro. As condi\xe7\xf5es s\xe3o sempre transparentes e definidas em contrato."},{question:"Posso acompanhar o andamento do meu processo?",answer:"Sim! Fornecemos atualiza\xe7\xf5es regulares sobre seu processo atrav\xe9s de WhatsApp ou e-mail, conforme sua prefer\xeancia."},{question:"E se meu benef\xedcio for negado pelo INSS?",answer:"N\xe3o se preocupe! Em caso de negativa, analisamos os motivos e, se houver base legal, recorremos administrativamente ou judicialmente. Nossa taxa de sucesso em recursos \xe9 superior a 90%, pois s\xf3 entramos com a\xe7\xf5es quando identificamos real direito ao benef\xedcio."}].map((s,t)=>(0,o.jsx)(ScrollReveal,{delay:.1*t,children:(0,o.jsxs)("div",{className:"bg-white border border-[#3E4A46]/20 rounded-lg overflow-hidden hover:border-[#957D56] hover:shadow-card-hover transition-all duration-300",children:[(0,o.jsxs)("button",{type:"button",className:"w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors duration-300",onClick:()=>a(e===t?null:t),"aria-expanded":e===t,"aria-controls":"faq-answer-".concat(t),children:[(0,o.jsx)("h3",{className:"text-xl font-semibold text-[#1A1A1A]",children:s.question}),(0,o.jsx)(j.Z,{className:"w-5 h-5 text-[#957D56] transition-transform duration-200 flex-shrink-0\n                              ".concat(e===t?"rotate-180":"")})]}),(0,o.jsx)("div",{id:"faq-answer-".concat(t),className:"px-6 transition-all duration-300 ease-in-out\n                            ".concat(e===t?"pb-6 max-h-96 opacity-100":"max-h-0 overflow-hidden opacity-0"),children:(0,o.jsx)("p",{className:"text-[#4A4A4A]",children:s.answer})})]})},t))})]})})}var g=s(2741),N=s(1295),A=s(6142),w=s(6141),D=s(6539),S=s(1798);function Contact(){let e=encodeURIComponent("Oi, quero falar com um especialista sobre meu caso");return(0,o.jsx)("footer",{className:"section-padding bg-gray-50",children:(0,o.jsxs)("div",{className:"container mx-auto  px-4",children:[(0,o.jsx)(ScrollReveal,{children:(0,o.jsxs)("h2",{className:"text-center mb-12",children:[(0,o.jsx)("span",{className:"block text-[#957D56] text-4xl md:text-5xl font-bold",children:"ENTRE EM CONTATO"}),(0,o.jsx)("span",{className:"text-[#4A4A4A] text-xl mt-4 block",children:"Conquiste seus direitos com quem mais entende"})]})}),(0,o.jsxs)("div",{className:"max-w-6xl mx-auto",children:[(0,o.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12",children:[(0,o.jsx)(ScrollReveal,{animation:"slideUp",delay:.2,children:(0,o.jsxs)("div",{className:"space-y-6 p-4 ",children:[(0,o.jsxs)("a",{href:"tel:+5517996088520",className:"flex items-center gap-3 text-lg text-[#1A1A1A] hover:text-[#957D56]  hover:scale-105 transition-all duration-300",children:[(0,o.jsx)(g.Z,{className:"text-[#957D56]"}),(0,o.jsx)("span",{children:"(17) 99608-8520"})]}),(0,o.jsxs)("a",{href:"mailto:jbbadvogados@gmail.com",className:"flex items-center gap-3 text-lg text-[#1A1A1A] hover:text-[#957D56] hover:scale-105 transition-all duration-300",children:[(0,o.jsx)(N.Z,{className:"text-[#957D56]"}),(0,o.jsx)("span",{children:"jbbadvogados@gmail.com"})]}),(0,o.jsxs)("div",{className:"flex items-center gap-3 text-lg group hover:scale-105 transition-all duration-300",children:[(0,o.jsx)(A.Z,{className:"text-[#957D56] flex-shrink-0"}),(0,o.jsx)("span",{className:"text-[#1A1A1A] group-hover:text-[#957D56] transition-colors",children:"Rua Floriano Peixoto, 3040, S. J. Rio Preto/SP"})]}),(0,o.jsxs)("div",{className:"flex items-start gap-3 text-lg group hover:scale-105 transition-all duration-300",children:[(0,o.jsx)(w.Z,{className:"text-[#957D56] flex-shrink-0 mt-1"}),(0,o.jsxs)("div",{className:"text-[#1A1A1A] group-hover:text-[#957D56] transition-colors",children:[(0,o.jsx)("h3",{className:"font-semibold mb-2",children:"Hor\xe1rio de Atendimento"}),(0,o.jsx)("p",{children:"Segunda - Sexta"}),(0,o.jsx)("p",{children:"09h - 17h"})]})]}),(0,o.jsx)("div",{className:"pt-6",children:(0,o.jsxs)("a",{href:"https://www.instagram.com/bressanadvocacia/",target:"_blank",rel:"noopener noreferrer",className:"group flex items-center gap-4 hover:scale-105 transition-all duration-300 ","aria-label":"Siga-nos no Instagram",children:[(0,o.jsx)(D.Z,{className:"w-8 h-8 "}),(0,o.jsxs)("div",{className:"flex-1",children:[(0,o.jsx)("p",{className:"font-semibold text-lg",children:"Siga-nos no Instagram"}),(0,o.jsx)("p",{className:"text-sm opacity-90",children:"@bressanadvocacia"})]})]})}),(0,o.jsx)("div",{className:"pt-2 ",children:(0,o.jsxs)("a",{href:"https://www.facebook.com/jvbressanadvocacia",target:"_blank",rel:"noopener noreferrer",className:"group flex items-center gap-4  hover:scale-105 transition-all duration-300","aria-label":"Siga-nos no Facebook",children:[(0,o.jsx)(S.Z,{className:"w-8 h-8 transition-colors"}),(0,o.jsxs)("div",{className:"flex-1",children:[(0,o.jsx)("p",{className:"font-semibold text-lg",children:"Curta nossa p\xe1gina"}),(0,o.jsx)("p",{className:"text-sm opacity-90",children:"JBB Advocacia"})]})]})})]})}),(0,o.jsx)(ScrollReveal,{animation:"slideUp",delay:.4,children:(0,o.jsx)("div",{className:"w-full h-[400px] rounded-lg overflow-hidden shadow-lg border border-[#3E4A46]/20",children:(0,o.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.4770993193386!2d-49.40213798255615!3d-20.819162699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bdad614c548875%3A0x3e88c1d7946b9d67!2sR.%20Floriano%20Peixoto%2C%203040%20-%20Centro%2C%20S%C3%A3o%20Jos%C3%A9%20do%20Rio%20Preto%20-%20SP%2C%2015010-020!5e0!3m2!1spt-BR!2sbr!4v1647881234567!5m2!1spt-BR!2sbr",width:"100%",height:"100%",style:{border:0},allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Localiza\xe7\xe3o do escrit\xf3rio"})})})]}),(0,o.jsx)(ScrollReveal,{animation:"fadeIn",delay:.6,children:(0,o.jsxs)("div",{className:"text-center",children:[(0,o.jsx)("a",{href:"https://wa.me/5517996088520?text=".concat(e),target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center gap-2 bg-[#957D56] text-white px-8 py-4 rounded-lg hover:bg-[#7A6545] hover:scale-105 transition-all duration-300  focus:ring-2 focus:ring-[#957D56] focus:ring-offset-2 focus:outline-none",children:"AVALIE SEU CASO AGORA"}),(0,o.jsx)("p",{className:"mt-4 text-[#4A4A4A]",children:"Resposta em at\xe9 24 horas"})]})})]})]})})}function Specialist(){return(0,o.jsx)("section",{className:"section-padding bg-[#faf6ec]","aria-labelledby":"specialist-title",children:(0,o.jsx)("div",{className:"container mx-auto px-4",children:(0,o.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto",children:[(0,o.jsx)(ScrollReveal,{animation:"fadeIn",children:(0,o.jsx)("div",{className:"relative aspect-[3/4] w-full max-w-[600px] mx-auto lg:mx-0",children:(0,o.jsx)(i(),{src:"/especialista.webp",alt:"Dr. Jo\xe3o Victor Bressan - Advogado Especialista em Direito Previdenci\xe1rio",fill:!0,className:"object-cover object-center",sizes:"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px",priority:!0,quality:100})})}),(0,o.jsxs)("div",{className:"flex flex-col justify-center text-center lg:text-right",children:[(0,o.jsx)(ScrollReveal,{animation:"slideUp",delay:.2,children:(0,o.jsxs)("div",{className:"mb-8",children:[(0,o.jsx)("h2",{className:"text-[#957D56] text-4xl md:text-5xl font-bold mb-4",children:"Conhe\xe7a quem ir\xe1 liderar a sua defesa"}),(0,o.jsx)("h3",{className:"text-[#1A1A1A] text-2xl md:text-3xl mb-2",children:"JO\xc3O VICTOR BRESSAN"}),(0,o.jsx)("p",{className:"text-[#957D56] font-semibold",children:"OAB/SP 443.103"})]})}),(0,o.jsx)(ScrollReveal,{animation:"slideUp",delay:.4,children:(0,o.jsxs)("div",{className:"space-y-4 text-[#4A4A4A]",children:[(0,o.jsx)("p",{children:"Como especialista em direito previdenci\xe1rio, dedico minha carreira \xe0 defesa incans\xe1vel dos direitos dos segurados do INSS. Minha paix\xe3o pela justi\xe7a previdenci\xe1ria me motiva a lutar diariamente pelos interesses de meus clientes."}),(0,o.jsx)("p",{children:"Ao longo dos anos, desenvolvi uma profunda compreens\xe3o das complexidades do sistema previdenci\xe1rio brasileiro, permitindo-me encontrar solu\xe7\xf5es eficazes para os mais diversos casos que chegam ao meu escrit\xf3rio."}),(0,o.jsx)("p",{children:"Independente da \xe1rea que meu escrit\xf3rio for contratado, meu compromisso \xe9 oferecer um atendimento personalizado e humanizado, compreendendo que cada caso \xe9 \xfanico e merece aten\xe7\xe3o especial. Coloco toda minha experi\xeancia e conhecimento a servi\xe7o dos seus direitos."})]})})]})]})})})}var y=s(8291);function CallToAction(){let e=encodeURIComponent("Oi, quero falar com um especialista sobre meu caso");return(0,o.jsx)("section",{className:"section-padding bg-white",children:(0,o.jsx)("div",{className:"container mx-auto px-4",children:(0,o.jsx)("div",{className:"bg-gray-50 border border-[#3E4A46]/20 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto hover:border-[#957D56] hover:shadow-card-hover transition-all duration-300",children:(0,o.jsx)(ScrollReveal,{children:(0,o.jsxs)("div",{className:"flex flex-col items-center text-center",children:[(0,o.jsx)(u.Z,{className:"w-16 h-16 text-[#957D56] mb-6"}),(0,o.jsxs)("h2",{className:"text-3xl md:text-4xl font-bold mb-6",children:["N\xe3o deixe seu benef\xedcio nas m\xe3os do"," ",(0,o.jsx)("span",{className:"text-[#957D56]",children:"INSS"})]}),(0,o.jsx)("p",{className:"text-xl md:text-2xl text-[#4A4A4A] mb-8 max-w-3xl",children:"Tenha um advogado especialista defendendo seus direitos. Nossa expertise \xe9 sua garantia de um processo conduzido com excel\xeancia."}),(0,o.jsxs)("div",{className:"flex flex-col sm:flex-row gap-4",children:[(0,o.jsxs)("a",{href:"https://wa.me/5517996088520?text=".concat(e),target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center gap-2 bg-[#957D56] text-white px-8 py-4 rounded-lg hover:bg-[#7A6545] hover:scale-105 transition-all duration-300  focus:ring-2 focus:ring-[#957D56] focus:ring-offset-2 focus:outline-none",children:["FALAR COM ESPECIALISTA",(0,o.jsx)(y.Z,{className:"w-5 h-5"})]}),(0,o.jsx)("a",{href:"tel:+5517996088520",className:"inline-flex items-center justify-center gap-2 border-2 border-[#957D56] text-[#957D56] px-8 py-4 rounded-lg hover:bg-[#957D56] hover:text-white hover:scale-105 transition-all duration-300  focus:ring-2 focus:ring-[#957D56] focus:ring-offset-2 focus:outline-none",children:"LIGAR AGORA"})]})]})})})})})}var E=s(4530),R=s(8203);function NationalCoverage(){let e=encodeURIComponent("Oi, quero falar com um especialista sobre meu caso");return(0,o.jsx)("section",{className:"section-padding bg-[#faf6ec]",children:(0,o.jsx)("div",{className:"container mx-auto px-4",children:(0,o.jsxs)("div",{className:"max-w-5xl mx-auto bg-white rounded-2xl border border-[#3E4A46]/20 p-8 md:p-12 hover:border-[#957D56] hover:shadow-card-hover transition-all duration-300",children:[(0,o.jsx)(ScrollReveal,{children:(0,o.jsxs)("div",{className:"flex flex-col items-center text-center mb-8",children:[(0,o.jsx)(A.Z,{className:"w-16 h-16 text-[#957D56] mb-6"}),(0,o.jsx)("h2",{className:"text-3xl md:text-4xl font-bold text-[#957D56] mb-4",children:"ATENDIMENTO NACIONAL"}),(0,o.jsx)("p",{className:"text-xl text-[#4A4A4A] mb-8",children:"Presente em todo o Brasil, com sede em S\xe3o Jos\xe9 do Rio Preto/SP, oferecemos atendimento personalizado onde voc\xea estiver:"})]})}),(0,o.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12",children:[(0,o.jsx)(ScrollReveal,{children:(0,o.jsx)("div",{className:"relative w-full aspect-square max-w-[500px] mx-auto",children:(0,o.jsx)(i(),{src:"/mapa.webp",alt:"Mapa do Brasil mostrando nossa cobertura nacional",fill:!0,className:"object-contain",priority:!0})})}),(0,o.jsx)("div",{className:"space-y-4",children:["Consultoria presencial ou online","Padr\xe3o de excel\xeancia garantido em todo territ\xf3rio nacional","Flexibilidade para adaptar nossos servi\xe7os \xe0 sua localiza\xe7\xe3o","Suporte completo e orienta\xe7\xe3o especializada"].map((e,a)=>(0,o.jsx)(ScrollReveal,{delay:.1*a,children:(0,o.jsxs)("div",{className:"flex items-center gap-4 bg-gray-50 p-6 rounded-lg border border-[#3E4A46]/20 hover:border-[#957D56] hover:scale-105 transition-all duration-300",children:[(0,o.jsx)(E.Z,{className:"w-6 h-6 text-[#957D56] flex-shrink-0"}),(0,o.jsx)("p",{className:"text-[#1A1A1A]",children:e})]})},a))})]}),(0,o.jsx)(ScrollReveal,{delay:.5,children:(0,o.jsxs)("div",{className:"text-center",children:[(0,o.jsx)("p",{className:"text-xl text-[#4A4A4A] mb-8",children:"N\xe3o perca mais tempo. Garanta seus direitos agora mesmo."}),(0,o.jsx)("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:(0,o.jsxs)("a",{href:"https://wa.me/5517996088520?text=".concat(e),target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center gap-2 bg-[#957D56] text-white px-8 py-4 rounded-lg hover:bg-[#7A6545] hover:scale-105 transition-all duration-300  focus:ring-2 focus:ring-[#957D56] focus:ring-offset-2 focus:outline-none",children:[(0,o.jsx)(R.Z,{className:"w-5 h-5"}),"INICIE SEU ATENDIMENTO AGORA MESMO"]})}),(0,o.jsxs)("div",{className:"mt-8 flex items-center justify-center gap-2 text-[#4A4A4A]",children:[(0,o.jsx)(A.Z,{className:"w-5 h-5 text-[#957D56]"}),(0,o.jsx)("p",{children:"Sede: S\xe3o Jos\xe9 do Rio Preto/SP"})]})]})})]})})})}var C=s(2882),q=s(272),I=s(6198);function WhyChooseUs(){let e=encodeURIComponent("Oi, quero falar com um especialista sobre meu caso"),a=[{icon:p.Z,title:"Equipe especializada",description:"Profissionais com forma\xe7\xe3o cont\xednua e expertise comprovada em direito previdenci\xe1rio"},{icon:C.Z,title:"Comunica\xe7\xe3o clara",description:"Traduzimos termos jur\xeddicos complexos em linguagem simples e acess\xedvel"},{icon:q.Z,title:"Solu\xe7\xf5es estrat\xe9gicas",description:"Desenvolvimento de estrat\xe9gias personalizadas para cada caso espec\xedfico"},{icon:I.Z,title:"Atendimento humanizado",description:"100% humano e personalizado, sem uso de rob\xf4s ou automa\xe7\xf5es"}];return(0,o.jsx)("section",{className:"section-padding bg-gray-50",children:(0,o.jsxs)("div",{className:"container mx-auto px-4",children:[(0,o.jsx)(ScrollReveal,{children:(0,o.jsxs)("div",{className:"text-center mb-16",children:[(0,o.jsxs)("h2",{className:"text-4xl md:text-5xl font-bold mb-6",children:["Por que ",(0,o.jsx)("span",{className:"text-[#957D56]",children:"nos escolher?"})]}),(0,o.jsx)("p",{className:"text-xl text-[#4A4A4A] max-w-3xl mx-auto",children:"Nossa miss\xe3o \xe9 oferecer um servi\xe7o jur\xeddico de excel\xeancia, combinando expertise t\xe9cnica com um atendimento verdadeiramente humano"})]})}),(0,o.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto",children:a.map((e,a)=>(0,o.jsx)(ScrollReveal,{delay:.1*a,children:(0,o.jsx)("div",{className:"bg-white border border-[#3E4A46]/20 rounded-xl p-6 hover:border-[#957D56] transition-all duration-300 hover:scale-105 hover:shadow-card-hover group",children:(0,o.jsxs)("div",{className:"flex items-start gap-4",children:[(0,o.jsx)(e.icon,{className:"w-6 h-6 text-[#957D56] flex-shrink-0"}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{className:"text-xl font-semibold mb-2 text-[#1A1A1A]",children:e.title}),(0,o.jsx)("p",{className:"text-[#4A4A4A]",children:e.description})]})]})})},a))}),(0,o.jsx)(ScrollReveal,{delay:.6,children:(0,o.jsx)("div",{className:"mt-16 text-center",children:(0,o.jsx)("a",{href:"https://wa.me/5517996088520?text=".concat(e),target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center gap-2 bg-[#957D56] text-white px-8 py-4 rounded-lg hover:bg-[#7A6545] hover:scale-105 transition-all duration-300  focus:ring-2 focus:ring-[#957D56] focus:ring-offset-2 focus:outline-none",children:"GARANTA SEUS DIREITOS AGORA"})})})]})})}var O=s(5340),k=s(1291),z=s(7158),P=s(3711),Z=s(9370);function Reviews(){let[e,a]=(0,Z.Z)({align:"start",containScroll:"trimSnaps"}),ReviewCard=e=>{let{review:a}=e;return(0,o.jsxs)("div",{className:"bg-white border border-[#3E4A46]/20 rounded-xl p-6 hover:border-[#957D56] transition-all duration-300 hover:shadow-card-hover h-full",children:[(0,o.jsx)("div",{className:"flex items-center gap-1 mb-4",children:[1,2,3,4,5].map(e=>(0,o.jsx)(O.Z,{className:"w-4 h-4 text-yellow-400 fill-current","aria-hidden":"true"},e))}),(0,o.jsx)("p",{className:"text-[#4A4A4A] mb-4 line-clamp-4",children:a.content}),(0,o.jsxs)("div",{className:"mt-auto",children:[(0,o.jsx)("p",{className:"font-semibold text-[#1A1A1A]",children:a.author}),(0,o.jsx)("p",{className:"text-sm text-[#4A4A4A]",children:a.date})]})]})};return(0,o.jsx)("section",{className:"section-padding bg-gray-50",children:(0,o.jsxs)("div",{className:"container mx-auto px-4",children:[(0,o.jsx)(ScrollReveal,{children:(0,o.jsxs)("div",{className:"text-center mb-16",children:[(0,o.jsxs)("h2",{className:"text-4xl md:text-5xl font-bold mb-6",children:["O que nossos ",(0,o.jsx)("span",{className:"text-[#957D56]",children:"clientes dizem"})]}),(0,o.jsx)("div",{className:"flex items-center justify-center gap-1 mb-4",children:[1,2,3,4,5].map(e=>(0,o.jsx)(O.Z,{className:"w-6 h-6 text-yellow-400 fill-current","aria-hidden":"true"},e))}),(0,o.jsx)("p",{className:"text-xl text-[#4A4A4A]",children:"5.0 de m\xe9dia baseado em mais de 50 avalia\xe7\xf5es"})]})}),(0,o.jsxs)("div",{className:"relative mb-12",children:[(0,o.jsx)("div",{className:"overflow-hidden",ref:e,children:(0,o.jsx)("div",{className:"flex gap-8",children:[{author:"Edi Joaquim",content:"Jo\xe3o Victor \xe9 um profissional excepcional! Desde o in\xedcio do atendimento, demonstrou muita aten\xe7\xe3o e comprometimento, esclarecendo todas as minhas d\xfavidas de forma clara e eficiente. Gra\xe7as ao seu suporte, meu caso foi resolvido com sucesso. Parab\xe9ns pelo excelente trabalho, Jo\xe3o!",date:"2 meses atr\xe1s"},{author:"Milton Lopes",content:"Excelentes profissionais, muito atenciosos, dedicados, e sempre priorizando oque \xe9 melhor para n\xf3s clientes!! Tamo junto Dr. Jo\xe3o Victor eee Dr. Paula Chioca",date:"2 meses atr\xe1s"},{author:"Joseli Ferreira Rodrigues",content:"Excelente profissional. Muito prestativo atencioso e realmente trabalha.",date:"2 meses atr\xe1s"},{author:"Dora Mendes",content:"O atendimento \xe9 excelente, o Dr. Bressan esclarece as d\xfavidas de forma did\xe1tica, as informa\xe7\xf5es s\xe3o claras e confi\xe1veis.",date:"2 meses atr\xe1s"},{author:"Rafael Tridico",content:"Excelente atendimento, resolveu meu caso muito r\xe1pido e eficaz super recomendo \uD83D\uDC4F\uD83D\uDC4F\uD83D\uDC4F",date:"2 meses atr\xe1s"},{author:"Cleucilene Rodrigues",content:"Quero dizer para as pessoas que fui muito bem atendida e q o meu problema foi resolvido eu super indico o Dr Jo\xe3o Vitor Bressan \xf3timo advogado",date:"2 meses atr\xe1s"},{author:"C\xe9lia M\xf4nica Rodrigues",content:"Fui muito bem atendida, excelente profissional. Recomendo",date:"2 meses atr\xe1s"},{author:"Ana Fucci",content:"Excelente profissional, solicito e atencioso! Bem \xe1gil na elabora\xe7\xe3o e entrada de processos! Recomendo",date:"4 meses atr\xe1s"}].map((e,a)=>(0,o.jsx)("div",{className:"flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]",children:(0,o.jsx)(ReviewCard,{review:e})},a))})}),(0,o.jsx)("button",{onClick:()=>null==a?void 0:a.scrollPrev(),className:"absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg border border-[#3E4A46]/20 hover:border-[#957D56] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#957D56] focus:ring-offset-2 z-10","aria-label":"Previous review",children:(0,o.jsx)(k.Z,{className:"w-6 h-6 text-[#957D56]"})}),(0,o.jsx)("button",{onClick:()=>null==a?void 0:a.scrollNext(),className:"absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg border border-[#3E4A46]/20 hover:border-[#957D56] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#957D56] focus:ring-offset-2 z-10","aria-label":"Next review",children:(0,o.jsx)(z.Z,{className:"w-6 h-6 text-[#957D56]"})})]}),(0,o.jsx)(ScrollReveal,{delay:.6,children:(0,o.jsx)("div",{className:"text-center",children:(0,o.jsxs)("a",{href:"https://www.google.com/maps/place/Advocacia+Bressan/@-20.8191113,-49.3999965,17z/data=!4m8!3m7!1s0x94bdad0174371a1f:0x1a6c9a3fa0643c08!8m2!3d-20.8191113!4d-49.3999965!9m1!1b1!16s%2Fg%2F11pf8fx9yr?hl=pt-br&entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 bg-[#957D56] text-white px-8 py-4 rounded-lg hover:bg-[#7A6545] hover:scale-105 transition-all duration-300  focus:ring-2 focus:ring-[#957D56] focus:ring-offset-2 focus:outline-none",children:["VER TODAS AS AVALIA\xc7\xd5ES",(0,o.jsx)(P.Z,{className:"w-5 h-5"})]})})})]})})}function Home(){return(0,o.jsxs)("main",{className:"bg-white",children:[(0,o.jsx)(Hero,{}),(0,o.jsx)(Stats,{}),(0,o.jsx)(AreasExpertise,{}),(0,o.jsx)(WhyChooseUs,{}),(0,o.jsx)(Specialist,{}),(0,o.jsx)(Reviews,{}),(0,o.jsx)(NationalCoverage,{}),(0,o.jsx)(CallToAction,{}),(0,o.jsx)(FAQ,{}),(0,o.jsx)(Contact,{})]})}}},function(e){e.O(0,[955,971,472,744],function(){return e(e.s=1187)}),_N_E=e.O()}]);