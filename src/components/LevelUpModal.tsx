import React from 'react';
import { useChallenges } from '../hooks/useChallenges';
import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useChallenges();

  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>
        <p>
          <button 
            type="button" 
            className={styles.sharedTwitterButton}
            onClick={
              () => { 
                navigator.share({
                 title: 'Share', 
                 text:  'moveIT',                    
                 url:   `https://twitter.com/intent/tweet?
                          url=https://rocketseat.com.br/
                          &text=moveIT
                          &hashtags=#exercicio`
                }
              )}
              }
          >
            Compartilhar no twitter&nbsp;<img src="/icons/twitter.svg" />
          </button>          
        </p>
        <button type="button" className={styles.closeLevelUpModal} onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" />
        </button>
      </div>
    </div>
  );
}