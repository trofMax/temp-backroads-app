// * Images import for Tours section
import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';

export const pageLinks = [
  {
    id: 1,
    href: '#home',
    text: 'home',
  },
  {
    id: 2,
    href: '#about',
    text: 'about',
  },
  {
    id: 3,
    href: '#services',
    text: 'services',
  },
  {
    id: 4,
    href: '#tours',
    text: 'tours',
  },
];

export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },
];

export const services = [
  { id: 1, icon: 'fas fa-wallet fa-fw', title: 'Saving Money', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.' },
  { id: 2, icon: 'fas fa-tree fa-fw', title: 'Endless Hiking', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.' },
  { id: 3, icon: 'fas fa-socks fa-fw', title: 'Amazing Comfort', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.' },
];

export const tours = [
  {
    id: 1,
    img: tour1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'china',
    duration: 6,
    price: 2100,
  },
  {
    id: 2,
    img: tour2,
    date: 'October 1th, 2020',
    title: 'Best Of Java',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'Indonesia',
    duration: 11,
    price: 1400,
  },
  {
    id: 3,
    img: tour3,
    date: 'September 15th, 2020',
    title: 'Explore Hong Kong',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'Hong Kong',
    duration: 8,
    price: 5000,
  },
  {
    id: 4,
    img: tour4,
    date: 'December 5th, 2019',
    title: 'Kenya Highlights',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'Kenya',
    duration: 20,
    price: 3300,
  },
];
