import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("A test Recipe", "This is a test", "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2021-12-spaghetti%2F211208_ApartmentTherapy_Spaghetti_0172"),
    new Recipe("A new innovative Recipe", "Yep this is a dingos recipe", "https://www.seriouseats.com/thmb/ECQcT_2qup3PJElXsxudh3shLLY=/1125x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2017__01__20161219-stuffed-shells-vicky-wasik-16-7774f1383da54a0180d5b14590fdd7aa.jpg")
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
