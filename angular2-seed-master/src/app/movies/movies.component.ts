import {Component} from '@angular/core';

@Component({

    selector: 'movies', 
    templateUrl: './movies.component.html'
})

export class Movies {
    recentlyWatchedMovies = ['The big Lebowski','Ant-man','The Revenant'];

}