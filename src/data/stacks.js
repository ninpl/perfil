import imgAnimeChart from '@/images/icons/animechart.png'
import imgATTB from '@/images/icons/activetimeturnbased.png'
import imgTTB from '@/images/icons/tacticturnbased.png'
import imgSaoUtils from '@/images/icons/saoutils.png'
import imgPuebloNoche from '@/images/icons/pueblonoche.png'
import imgCastilloSol from '@/images/icons/castillosol.png'
import imgCiudadMonta from '@/images/icons/ciudadmonta.png'
import imgSacerdotisa from '@/images/icons/sacerdotisa.png'
import imgBlancoNegro from '@/images/icons/blanconegro.png'
import imgTessellation from '@/images/icons/tessellation.png'
import imgCorva from '@/images/icons/corva.png'
import imgConcepto from '@/images/icons/concepto.png'
import imgLineart from '@/images/icons/lineart.png'
import imgPaleta3D from '@/images/icons/paleta3d.png'
import imgWindwaker from '@/images/icons/windwaker.png'

export const stacksType = [
  {
    id: '1',
    name: 'des',
    online: true,
  },
  {
    id: '2',
    name: 'dis',
    online: true,
  },
  {
    id: '3',
    name: 'art',
    online: true,
  },
  {
    id: '4',
    name: 'gamer',
    online: true,
  },
  {
    id: '5',
    name: 'otr',
    online: true,
  },
]
export const stacks = [
  {
    type: 'des',
    title: 'AnimeChart',
    link: 'https://github.com/CodeBackDoor/AnimeChart',
    info: 'AnimeChart es un software para crear charts, actualmente destinado a las temporadas de anime que ocurren en verano, otoño, invierno y primavera.',
    img: imgAnimeChart,
  },
  {
    type: 'des',
    title: 'Active Time Turn Based',
    link: 'https://github.com/ninpl/ActiveTimeTurnBased',
    info: 'Sistema de batalla por turnos en Unity3D. Es un sistema de batalla usado en los juegos RPGs clásicos, Square Enix creo algunas obras con este sistema.',
    img: imgATTB,
  },
  {
    type: 'des',
    title: 'Tactic Turn Based',
    link: 'https://github.com/ninpl/TacticTurnBased',
    info: 'Prototipo inicial de un juego táctico. Este proyecto solo alberga unos pocos assets con licencia free y el core de un sistema de combate táctico por turnos.',
    img: imgTTB,
  },
  {
    type: 'des',
    title: 'SAO Utils',
    link: 'https://store.steampowered.com/app/786520/SAO_Utils_Beta/',
    info: 'El programa SAO Utils es un iniciador Look n Feel de Sword Art Online con una variedad de poderosas utilidades. Su arquitectura conectable le permite a usted, el desarrollador, agregar cualquier tipo de complemento al programa principal.',
    img: imgSaoUtils,
  },
  {
    type: 'dis',
    title: 'Pueblo Nocturno',
    link: 'https://www.deviantart.com/moonpincho/art/NightTown-760167245',
    info: 'Diseño de nivel de un pueblo medieval de fantasía en la noche con un riachuelo en el centro y una puesta cinematográfica. (Unity)',
    img: imgPuebloNoche,
  },
  {
    type: 'dis',
    title: 'Puesta de Castillo',
    link: 'https://www.deviantart.com/moonpincho/art/Castle-Sunset-760168997',
    info: 'Diseño de nivel de un castillo medieval de fantasía en una puesta de sol con los rayos de luz cegando. (Unreal)',
    img: imgCastilloSol,
  },
  {
    type: 'dis',
    title: 'Ciudad en la Montaña',
    link: 'https://www.deviantart.com/moonpincho/art/City-in-the-night-mountain-760169636',
    info: 'Diseño de nivel de una ciudad medieval antigua dentro de una montaña con niebla volumétrica. (Unity)',
    img: imgCiudadMonta,
  },
  {
    type: 'art',
    title: 'Sacerdotisa',
    link: 'https://www.deviantart.com/moonpincho/art/SacerRabbit-771748836',
    info: 'Una tira de lineas con iluminación y pose medio perfilada de una sacerdotisa mitad humana mitad conejo.',
    img: imgSacerdotisa,
  },
  {
    type: 'art',
    title: 'Blanco & Negro',
    link: 'https://www.deviantart.com/moonpincho/art/BlancoNegro-771748307',
    info: 'Un dibujo solo con tonalidades grises en 3 fases: Lineas, Iluminación/Sombreado y pose.',
    img: imgBlancoNegro,
  },
  {
    type: 'otr',
    title: 'Shader Tessellation',
    link: 'https://github.com/ninpl/ShadersAcumulacion',
    info: 'Modelo de un puente low poly con un shader de tessellation que simula el cambio de normal a nevado en el puente con sus mapas normales.',
    img: imgTessellation,
  },
  {
    type: 'des',
    title: 'CORvA',
    link: 'https://github.com/Nerve-Alexandria/CORvA',
    info: 'App para la gestion de anime. Mover, clasificar, organizar, eliminar, etiquetar entre otras funcionalidades. Actualmente esta en estado Alpha cerrada. ',
    img: imgCorva,
    pills: [{ name: 'new' }],
  },
  {
    type: 'art',
    title: 'Concepto Nuevo',
    link: 'https://ninpl.com/',
    info: 'Principales diseños, para hacerse a la idea del entorno de la historia. Estos conceptos de arte son un estilo entre varios desarrolladoras de videojuegos.',
    img: imgConcepto,
  },
  {
    type: 'art',
    title: 'Arte Lineal',
    link: 'https://www.deviantart.com/moonpincho/art/Referencia-Base-Anime-751973515',
    info: 'Principios del arte del anime, solo lineas de referencias, sin iluminación solo sombras planas y posicionamiento deforme.',
    img: imgLineart,
  },
  {
    type: 'art',
    title: 'Paleta 3D Modelos',
    link: 'https://www.deviantart.com/moonpincho/art/Skin-Palette-3D-Model-769844921',
    info: 'Paleta que uso para la piel en los modelos 3D anime, con sus 3 modos (Sombra - Base - Luz).',
    img: imgPaleta3D,
  },
  {
    type: 'otr',
    title: 'Agua Windwaker',
    link: 'https://github.com/ninpl/WaterLowpoly',
    info: 'Shader de agua al estilo Zelda Windwaker',
    img: imgWindwaker,
  },
]
