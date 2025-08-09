"use client";

import { useState } from 'react'; 
import portfolioData from '@/data/data.json';
import SkillsChart from './SkillsChart'; 

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('info');
  const { character, tools, achievements } = portfolioData;

  return (
    <div>
      {/* Botões das abas - sem alteração */}
      <div className="lists">
        <div className="nes-lists">
          <a href="#" onClick={() => setActiveTab('info')} className={`nes-btn ${activeTab === 'info' ? 'is-primary' : ''}`}>Info</a>
          <a href="#" onClick={() => setActiveTab('skills')} className={`nes-btn ${activeTab === 'skills' ? 'is-primary' : ''}`}>Habilidades</a>
          <a href="#" onClick={() => setActiveTab('tools')} className={`nes-btn ${activeTab === 'tools' ? 'is-primary' : ''}`}>Ferramentas</a>
          <a href="#" onClick={() => setActiveTab('achievements')} className={`nes-btn ${activeTab === 'achievements' ? 'is-primary' : ''}`}>Conquistas</a>
        </div>
      </div>

      <div className="nes-container is-dark with-title" style={{ marginTop: '20px' }}>
        
        {/* Aba INFO - sem alteração */}
        {activeTab === 'info' && (
          <div>
            <p className="title">README.md</p>
            <p>{character.readme}</p>
          </div>
        )}

        {/* Aba HABILIDADES - sem alteração */}
        {activeTab === 'skills' && (
          <div>
            <p className="title">Atributos</p>
            <SkillsChart />
          </div>
        )}

        {/* Aba FERRAMENTAS - AQUI ESTÁ A MUDANÇA */}
        {activeTab === 'tools' && (
          <div>
            <p className="title">Equipamentos</p>
            <div className="grid-container">
              {tools.map((tool, index) => (
                <div key={index} className="grid-item">
                  <i className={`nes-icon ${tool.icon} is-medium`}></i>
                  <p>{tool.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Aba CONQUISTAS - AQUI ESTÁ A MUDANÇA */}
        {activeTab === 'achievements' && (
          <div>
            <p className="title">Emblemas</p>
            <div className="grid-container">
              {achievements.map((achievement, index) => (
                <div key={index} className="grid-item">
                  <i className={`nes-icon ${achievement.icon} is-medium`}></i>
                  <p>{achievement.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}