import { Component } from '@angular/core';

const IMAGE_WIDTH = 50;
const IMAGE_MARGIN = 50;

@Component({
  selector: 'sfc-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  showImage = true;
  pageTitle = 'Product List';
  listFilter = 'cart';
  imageWidth = IMAGE_WIDTH;
  imageMargin = IMAGE_MARGIN;
  products = [
    {
      productId: 1,
      productName: 'Leaf Rake',
      productCode: 'GDN-0011',
      releaseDate: 'March 19, 2021',
      description: 'Leaf rake with 48-inch wooden handle.',
      price: 19.95,
      starRating: 3.2,
      imageUrl: 'assets/images/leaf_rake.png',
    },
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2021',
      description: '15 gallon capacity rolling garden cart',
      price: 32.99,
      starRating: 4.2,
      imageUrl: 'assets/images/garden_cart.png',
    },
  ];

  toggleImage() {
    this.showImage = !this.showImage;
  }
}