import imgHrdc from './images/HRDC Completion.jpeg';
import imgHrdcInProgress from './images/HRDC - In Progress pics.JPG';
import imgHrdcComp2 from './images/HRDC Comp, 2.jpeg';
import imgLakewood from './images/Students Housing Building.jpeg';
import imgSancta from './images/Students Commons -1.jpeg';
import imgCommons2 from './images/Students Commons -2.jpeg';
import imgStudentsHousing from './images/Students Housing.jpeg';

/** Project cards (Projects page / featured) */
export const PROJECT_IMAGE_HRDC = imgHrdc;
export const PROJECT_IMAGE_LAKEWOOD = imgLakewood;
export const PROJECT_IMAGE_SANCTA_MARIA = imgSancta;

/** Home “Expertise” carousel — real site & programme photography */
export const HOME_EXPERTISE_INSTITUTIONAL = imgSancta;
export const HOME_EXPERTISE_HEALTHCARE = imgHrdc;
export const HOME_EXPERTISE_RESIDENTIAL = imgLakewood;
export const HOME_EXPERTISE_COMMERCIAL = imgHrdcComp2;

/** About page — hero + gallery */
export const ABOUT_HERO_IMAGE = imgHrdc;
export const ABOUT_GALLERY_IMAGES: { src: string; alt: string }[] = [
  { src: imgHrdcInProgress, alt: 'HRDC project construction progress' },
  { src: imgHrdcComp2, alt: 'HRDC building nearing completion' },
  { src: imgCommons2, alt: 'School commons and circulation' },
  { src: imgStudentsHousing, alt: 'Residential student housing exterior' },
];
