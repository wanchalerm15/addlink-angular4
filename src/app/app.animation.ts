import { trigger, transition, style, animate } from '@angular/animations';

export const AppAnimation = [
    trigger('myFade', [
        transition(':enter', [
            style({
                transform: 'translateX(-100%)'
            }),
            animate(300)
        ]),
        transition(':leave', [
            animate(500, style({
                transform: 'translateX(100%)'
            }))
        ])
    ])
];