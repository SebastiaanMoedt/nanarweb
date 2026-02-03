import { Component, inject, OnInit } from '@angular/core';
import { Film } from '../../class/film';
import { CyclesDbMock } from '../../mock/cycles-db-mock';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-cycle-detail',
  imports: [],
  templateUrl: './cycle-detail.html',
  styleUrl: './cycle-detail.css',
})

export class CycleDetail implements OnInit{
  cycleDbMock: CyclesDbMock = new CyclesDbMock
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  cycleName = this.route.snapshot.params['cycleName'];
  listeFilms!: Film[]

ngOnInit(): void {
    this.listeFilms = this.getCycle(this.cycleName);
}

getCycle(name: string): Film[]{
  let allFilms: Film[] = this.cycleDbMock.getAllFilmsInCycle(name)
  let sortedFilms = allFilms.sort((a, b) => {
    if (a.year < b.year) {
        return -1;
    }
    if (a.year > b.year) {
        return 1;
    }
    return 0;
  });
  return sortedFilms
}}


// import { Directive, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
// import { DecimalPipe } from '@angular/common';

// export type SortColumn = keyof Film | '';
// export type SortDirection = 'asc' | 'desc' | '';
// const rotate: { [key: string]: SortDirection } = { asc: 'desc', desc: '', '': 'asc' };

// const compare = (v1: string | number, v2: string | number) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);

// export interface SortEvent {
// 	column: SortColumn;
// 	direction: SortDirection;
// }

// @Directive({
// 	selector: 'th[sortable]',
// 	host: {
// 		'[class.asc]': 'direction === "asc"',
// 		'[class.desc]': 'direction === "desc"',
// 		'(click)': 'rotate()',
// 	},
// })
// export class NgbdSortableHeader {
// 	@Input() sortable: SortColumn = '';
// 	@Input() direction: SortDirection = '';
// 	@Output() sort = new EventEmitter<SortEvent>();

// 	rotate() {
// 		this.direction = rotate[this.direction];
// 		this.sort.emit({ column: this.sortable, direction: this.direction });
// 	}
// }

// @Component({
// 	selector: 'ngbd-table-sortable',
// 	imports: [DecimalPipe, NgbdSortableHeader],
//   templateUrl: './cycle-detail.html',
//   styleUrl: './cycle-detail.css',
// })
// export class NgbdTableSortable {
//   sortedFilms = listeFilms

// 	@ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

// 	onSort({ column, direction }: SortEvent) {
// 		// resetting other headers
// 		for (const header of this.headers) {
// 			if (header.sortable !== column) {
// 				header.direction = '';
// 			}
// 		}

// 		// sorting countries
// 		if (direction === '' || column === '') {
// 			this.sortedFilms = listeFilms;
// 		} else {
// 			this.sortedFilms = [...listeFilms].sort((a, b) => {
// 				const res = compare(a[column], b[column]);
// 				return direction === 'asc' ? res : -res;
// 			});
// 		}
// 	}
// }