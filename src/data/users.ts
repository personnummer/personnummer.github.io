type User = {
  name: string;
  image: string;
  link: string;
  width?: number;
  height?: number;
};

type Users = User[];

const users: Users = [
  {
    name: 'Personnummer',
    image: 'https://avatars.githubusercontent.com/u/32910698?s=200&v=4',
    link: 'https://personnummer.dev/'
  },
  {
    name: 'Organisationsnummer',
    image: 'https://avatars.githubusercontent.com/u/96255764?s=200&v=4',
    link: 'https://organisationsnummer.dev/'
  }

  /* example */
  /*
    {
        name: 'Personnummer',
        image: 'https://avatars.githubusercontent.com/u/32910698?s=200&v=4',
        width 100, // default
        height: 100, // default
        link: 'https://personnummer.dev/'
    }
    */
];

export default users;
