import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Note {
    id: number;
    title: string;
    tags: string[];
    date: string;
}

@Injectable({
    providedIn: 'root',
})
export class NoteService {
    private jsonUrl = 'assets/data/notes.json';

    constructor(private http: HttpClient) {}

    getNotes(): Observable<Note[]> {
        return this.http.get<Note[]>(this.jsonUrl);
    }
}
