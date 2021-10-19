import '../styles/header.scss';

interface IProps {
   selectedGenre: {
      id: number;
      title: string;
      name: string;
   }
}

export function Header({ selectedGenre }: IProps) {

   return (
      <header>
         <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>
   )
}