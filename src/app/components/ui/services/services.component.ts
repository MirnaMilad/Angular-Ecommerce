import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services:{}[] = [
    {
      icon: "bi bi-truck",
      title: "Free Shipping",
      subtitle: "Lorem ipsum dolor sit amet.",
      bg: "#fdefe6",
    },
    {
      icon: "bi bi-arrow-clockwise",
      title: "Easy Returns",
      subtitle: "Lorem ipsum dolor sit amet.",
      bg: "#ceebe9",
    },
    {
      icon: "bi bi-credit-card-2-front",
      title: "Secure Payment",
      subtitle: "Lorem ipsum dolor sit amet.",
      bg: "#e2f2b2",
    },
    {
      icon: "bi bi-currency-dollar",
      title: " Back Guarantee",
      subtitle: "Lorem ipsum dolor sit amet.",
      bg: "#d6e5fb",
    },
  ];
}
