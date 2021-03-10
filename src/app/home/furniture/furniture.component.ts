import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { EnquiryModalComponent } from 'src/app/shared/components/modal/enquiry-modal/enquiry-modal.component';
import { Product } from '../../shared/classes/product';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.scss']
})
export class FurnitureComponent implements OnInit, OnDestroy {

  @ViewChild("enquiryModal") EnquiryModal: EnquiryModalComponent;


  public themeLogo: string = 'assets/images/DCAssets/DoctorsClubBlack.png'; // Change Logo

  public products: Product[] = [];
  public productCollections: any[] = [];

  constructor(public productService: ProductService) {
    this.productService.getProducts.subscribe(response => {
      this.products = response.filter(item => item.type == 'furniture');
      // Get Product Collection
      this.products.filter((item) => {
        item.collection.filter((collection) => {
          const index = this.productCollections.indexOf(collection);
          if (index === -1) this.productCollections.push(collection);
        })
      })
    });
  }

  // Collection banner TODO: Main Sliders
  public sliders = [{
    title: 'Used Cars',
    subTitle: 'Porsche Turbo S',
    image: 'assets/images/slider/turboS.jpg'
  }];

  // Collection banner TODO: Image & Link
  public collections = [{
    image: 'assets/images/Banners/Car1.jpg',
    // save: 'save 50%',
    title: 'Cars',
    link: '/shop/collection/cars'
  }, {
    image: 'assets/images/aircraft-exterior/Jet1.jpg',
    // save: 'save 50%',
    title: 'Aircrafts',
    link: '/shop/collection/aircrafts'
  },{
    image: 'assets/images/Banners/Boat1.jpg',
    // save: 'save 50%',
    title: 'Yachts',
    link: '/shop/collection/aircrafts'
  },{
    image: 'assets/images/Banners/Jewellery1.jpg',
    // save: 'save 50%',
    title: 'Jewellery',
    link: '/shop/collection/aircrafts'
  }]

  // Blog
  public blogs = [{
    image: 'assets/images/blog/14.jpg',
    date: '25 January 2018',
    title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
    by: 'John Dio'
  }, {
    image: 'assets/images/blog/15.jpg',
    date: '26 January 2018',
    title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
    by: 'John Dio'
  }, {
    image: 'assets/images/blog/16.jpg',
    date: '27 January 2018',
    title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
    by: 'John Dio'
  }, {
    image: 'assets/images/blog/14.jpg',
    date: '28 January 2018',
    title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
    by: 'John Dio'
  }]

  ngOnInit(): void {
    // Change color for this layout
    document.documentElement.style.setProperty('--theme-deafult', '#152548');
  }

  ngOnDestroy(): void {
    // Remove Color
    document.documentElement.style.removeProperty('--theme-deafult');
  }

  // Product Tab collection
  getCollectionProducts(collection) {

    let FilteredCollection = this.products.filter((item) => {
      if (item.collection.find(i => i === collection)) {
        return item
      }
    });

    console.log(FilteredCollection);
    return FilteredCollection; 
  }

}
