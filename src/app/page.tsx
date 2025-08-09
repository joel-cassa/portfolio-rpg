// Importa nosso componente de Carta
import CharacterCard from '@/components/CharacterCard';
// Importa nosso NOVO componente de Abas
import Tabs from '@/components/Tabs';

export default function Home() {
  return (
    <main className="main-container">
      
      {/* Coluna da Esquerda */}
      <section className="left-column">
        <CharacterCard />
      </section>

      {/* Coluna da Direita */}
      <section className="right-column">
        {/* Trocamos o texto antigo pelo nosso componente! */}
        <Tabs />
      </section>

    </main>
  );
}