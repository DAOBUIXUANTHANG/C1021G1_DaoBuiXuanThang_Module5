import { Component, OnInit } from '@angular/core';
import {DictionaryService} from '../service/dictionary.service';
import {ActivatedRoute} from '@angular/router';
import {IWord} from '../modul/IWord';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  result = '';
  value: IWord[];
  mean: string;
  constructor(private route: ActivatedRoute, private dictionaryService: DictionaryService) { }

  ngOnInit(): void {
    this.result = this.route.snapshot.paramMap.get('value');
    console.log(this.result);
    this.getValue();
  }
  getValue() {
    this.value = this.dictionaryService.dic;
    for (let item of this.value){
      if (this.result == item.word) {
        this.mean = item.mean;
      }
    }
  }
}
