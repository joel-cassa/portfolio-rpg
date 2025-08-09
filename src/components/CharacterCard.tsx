// Importa o componente de Imagem do Next.js para otimização
import Image from 'next/image';

// Importa nossos dados. O '@/' é um atalho para a pasta 'src/'
import portfolioData from '@/data/data.json';

// Nosso componente de Carta do Personagem
export default function CharacterCard() {
  // Pega apenas a seção "character" do nosso arquivo de dados
  const { character } = portfolioData;

  // Cria um array de estrelas para o nível do personagem
  const stars = Array.from({ length: 5 }, (_, index) => (
    <i
      key={index}
      className={`nes-icon star ${index < character.level ? '' : 'is-empty'}`}
    ></i>
  ));

  return (
    // O container principal da carta, com classes do nes.css
    <div className="nes-container with-title is-centered is-dark">
      <div className="title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <p>{character.name}</p>
        <div className="stars">{stars}</div>
      </div>
      
      {/* Usamos o componente Image para o avatar */}
      <Image
        src={character.avatarUrl}
        alt="Avatar do Personagem"
        width={256} // Defina a largura
        height={256} // Defina a altura
        style={{ width: '100%', height: 'auto', imageRendering: 'pixelated' }} // Estilo para manter o pixel art
      />

      <p>[{character.type}]</p>
      <p>{character.description}</p>
    </div>
  );
}