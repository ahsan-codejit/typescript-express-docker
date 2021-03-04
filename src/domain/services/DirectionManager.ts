import { Directions as DirectionsEnum } from '../types/enum';
/**
 * distance is calculated from heading to target
 */
export default class DirectionManager {
    heading: number;
    target: number;
    distance: number;
    highest: number = 360;
    lowest: number = 0;
    constructor(heading: number, target: number) {
        this.heading = heading;
        this.target = target;
        this.distance = this.heading - this.target;
    }

    getDirection() {
        if (this.distance === 0) return DirectionsEnum.Forward;
        if (this.distance > 0) {
            return this.getDirectionWhenHeadingGreter()
        } else {
            return this.getDirectionWhenHeadingSmaller();
        }
    }

    getDirectionWhenHeadingGreter() {
        if (this.highest - this.distance > this.distance) {
            return DirectionsEnum.Left;
        } else {
            return DirectionsEnum.Right
        }
    }

    getDirectionWhenHeadingSmaller() {
        let distance = Math.abs(this.distance);
        if (this.highest - distance > distance) {
            return DirectionsEnum.Right;
        } else {
            return DirectionsEnum.Left;
        }
    }


}