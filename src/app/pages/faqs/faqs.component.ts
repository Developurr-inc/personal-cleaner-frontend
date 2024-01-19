import { Component } from '@angular/core';
import { NavigationComponent } from '../../shared/components/navigation/navigation.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [NavigationComponent, FooterComponent],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css',
})
export class FaqsComponent {
  faqs: any = [
    {
      id: 1,
      question: 'Os nossos produtos possuem alguma certificação?',
      answer:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore animi voluptatum praesentium cupiditate exercitationem! Perferendis pariatur ipsam saepe deleniti. Doloremque consequatur hic ab itaque ipsa nihil expedita, inventore perspiciatis nostrum?',
      isOpen: false,
    },
    {
      id: 2,
      question:
        'Como é feito o cálculo para estimativa de produtos para uma semana?',
      answer:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore animi voluptatum praesentium cupiditate exercitationem! Perferendis pariatur ipsam saepe deleniti. Doloremque consequatur hic ab itaque ipsa nihil expedita, inventore perspiciatis nostrum?',
      isOpen: false,
    },
    {
      id: 3,
      question: 'Por acaso se tem desconto se eu comprar no atacado?',
      answer:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore animi voluptatum praesentium cupiditate exercitationem! Perferendis pariatur ipsam saepe deleniti. Doloremque consequatur hic ab itaque ipsa nihil expedita, inventore perspiciatis nostrum?',
      isOpen: false,
    },
    {
      id: 4,
      question: 'Atendemos nos finais de semana e feriados?',
      answer:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore animi voluptatum praesentium cupiditate exercitationem! Perferendis pariatur ipsam saepe deleniti. Doloremque consequatur hic ab itaque ipsa nihil expedita, inventore perspiciatis nostrum?',
      isOpen: false,
    },
  ];

  toggleDescription(id: number) {
    this.faqs.forEach((faq: any) => {
      if (faq.id == id) {
        faq.isOpen = !faq.isOpen;
      } else {
        faq.isOpen = false;
      }
    });
  }
}
