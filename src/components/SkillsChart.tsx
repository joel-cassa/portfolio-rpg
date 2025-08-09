"use client";

// Importa o componente de Gráfico de Radar
import { Radar } from 'react-chartjs-2';

// Importa todas as "peças" necessárias para o motor do Chart.js funcionar
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

// Importa nossos dados
import portfolioData from '@/data/data.json';

// Precisamos "registrar" as peças no motor do Chart.js
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function SkillsChart() {
  // Configuração dos dados para o gráfico
  const data = {
    labels: portfolioData.attributes.labels,
    datasets: [
      {
        label: 'Nível de Habilidade',
        data: portfolioData.attributes.values,
        backgroundColor: 'rgba(40, 150, 255, 0.2)', // Cor da área interna
        borderColor: 'rgba(80, 180, 255, 1)',      // Cor da linha externa
        borderWidth: 2,
      },
    ],
  };

  // Configuração da aparência do gráfico
  const options = {
    scales: {
      r: {
        angleLines: {
          color: 'rgba(255, 255, 255, 0.3)', // Cor das linhas que saem do centro
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.3)', // Cor da teia de aranha
        },
        pointLabels: {
          color: 'white', // Cor dos nomes das habilidades (Programação, etc)
          font: {
            size: 12,
            family: "'Press Start 2P', cursive",
          },
        },
        ticks: {
          color: 'white',
          backdropColor: 'rgba(0, 0, 0, 0.5)', // Fundo para os números
          font: {
            size: 10,
          },
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'white', // Cor da legenda "Nível de Habilidade"
          font: {
            family: "'Press Start 2P', cursive",
          },
        },
      },
    },
  };

  return <Radar data={data} options={options} />;
}