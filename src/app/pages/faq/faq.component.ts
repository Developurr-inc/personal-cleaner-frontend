import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  faqs: any = [
    {
      id: undefined,
      question: "Os nossos produtos possuem alguma certificação?",
      answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore animi voluptatum praesentium cupiditate exercitationem! Perferendis pariatur ipsam saepe deleniti. Doloremque consequatur hic ab itaque ipsa nihil expedita, inventore perspiciatis nostrum?",
      isOpen: false,
    },
    {
      id: undefined,
      question: "Como é feito o cálculo para estimativa de produtos para uma semana?",
      answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore animi voluptatum praesentium cupiditate exercitationem! Perferendis pariatur ipsam saepe deleniti. Doloremque consequatur hic ab itaque ipsa nihil expedita, inventore perspiciatis nostrum?",
      isOpen: false,
    },
    {
      id: undefined,
      question: "Por acaso se tem desconto se eu comprar no atacado?",
      answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore animi voluptatum praesentium cupiditate exercitationem! Perferendis pariatur ipsam saepe deleniti. Doloremque consequatur hic ab itaque ipsa nihil expedita, inventore perspiciatis nostrum?",
      isOpen: false,
    },
    {
      id: undefined,
      question: "Atendemos nos finais de semana e feriados?",
      answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore animi voluptatum praesentium cupiditate exercitationem! Perferendis pariatur ipsam saepe deleniti. Doloremque consequatur hic ab itaque ipsa nihil expedita, inventore perspiciatis nostrum?",
      isOpen: false,
    },
  ]

  openDescription: boolean = false;

  constructor() {
    this.faqs.forEach((faq:any, index:number) => {
      faq.id = index;
    });
    console.log(this.faqs)
  }

  toggleDescription(id:number) {
    this.faqs.forEach((faq:any) => {
      if (faq.id == id) {
        faq.isOpen = !faq.isOpen;
      } else {
        faq.isOpen = false;
      }
    })
  }
}
