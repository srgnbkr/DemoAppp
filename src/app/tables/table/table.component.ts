import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  data = [
    { name: 'Sergen', age: 25, job: 'Yazılım Mühendisi',employed:'Evet' },
    { name: 'Burcu', age: 22, job: 'Doktor',employed:'Evet' },
    { name: 'Elif', age: 26, job: 'Diş Hekimi',employed:'Evet' },
    { name: 'İrem', age: 28, job: 'Öğretmen',employed:'Hayır' },
  ];

  headers = [
    { key: 'employed', label: 'Aldığı ücretten memnun mu?' },
    { key: 'name', label: 'Ad&Soyad' },
    { key: 'age', label: 'Yaş' },
    { key: 'job', label: 'Meslek' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
