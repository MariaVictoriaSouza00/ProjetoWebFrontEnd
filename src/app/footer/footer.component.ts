// src/app/footer/footer.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <mat-toolbar color="primary" class="footer-toolbar">
      <div class="footer-content">
        <img src="../../../assets/Logo.png" alt="Descrição da Imagem" class="footer-image">
      </div>
    </mat-toolbar>
  `,
  styles: [`
    .footer-toolbar {
      position: fixed;
      bottom: 0;
      width: 100%;
      display: flex;
      justify-content: center;
      height: 100px;
      background-color: #033566;
    }

    .footer-content {
      display: flex;
      align-items: center;
      height: 100px;
    }

    .footer-image {
      height: 100px; /* ajuste a altura conforme necessário */
      width: 100%; /* garantir que a largura não ultrapasse a largura do rodapé */
    }
  
    @media screen and (max-width: 768px) {
      .footer-toolbar {
        height: 10px; /* Adjust the height for smaller screens */
      }
      .footer-content {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }

      .footer-image {
        display: none; /* Hide the image on smaller screens */
      }
    }
  `],
})
export class FooterComponent {}
