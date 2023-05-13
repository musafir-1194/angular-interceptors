import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  public isLoading$: Subject<boolean> = new Subject<boolean>();

  constructor() {}

  public showLoader(): void {
    this.isLoading$.next(true);
  }

  public hideLoader(): void {
    this.isLoading$.next(false);
  }
}
