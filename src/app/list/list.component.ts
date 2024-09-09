import { Component, Output, EventEmitter } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { CardListComponent } from '../card-list/card-list.component';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NavBarComponent, CardListComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {


  @Output() fileData = new EventEmitter<any[]>(); // Emissor para passar os dados
  fileContent(e: any): void {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);
    fileReader.onload = (event) => {
      const data = new Uint8Array(fileReader.result as ArrayBuffer);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      const excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      const formatData = excelData.map((item:any) => {
        return{
          name:item[0],
          age:item[1],
          phone:item[2],
          gender:item[3],
        }
      })
      console.log("Dados do Excel:", excelData);
      
      // Emitindo os dados para o componente filho
      this.fileData.emit(formatData); 
  }
  
  }
}