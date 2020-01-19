export default class SpaceAge {
    
    private orbitalPeriodOnEarthInSeconds = 31557600;
    seconds: number;

    constructor(periodInSeconds: number) {
        this.seconds = periodInSeconds;   
    }
    
    onEarth(): number {
        return this.calculatePlanetPeriodInSeconds(this.orbitalPeriodOnEarthInSeconds);
    }

    onMercury(): number {
        const orbitalMercuryPeriodInSeconds = 0.2408467 * this.orbitalPeriodOnEarthInSeconds;
        return this.calculatePlanetPeriodInSeconds(orbitalMercuryPeriodInSeconds);
    }

    onVenus(): number {
        const orbitalVenusPeriodInSeconds = 0.61519726 * this.orbitalPeriodOnEarthInSeconds;
        return this.calculatePlanetPeriodInSeconds(orbitalVenusPeriodInSeconds);
    }

    onMars(): number {
        const orbitalVenusPeriodInSeconds = 1.8808158 * this.orbitalPeriodOnEarthInSeconds;
        return this.calculatePlanetPeriodInSeconds(orbitalVenusPeriodInSeconds);
    }

    onJupiter(): number {
        const orbitalVenusPeriodInSeconds = 11.862615 * this.orbitalPeriodOnEarthInSeconds;
        return this.calculatePlanetPeriodInSeconds(orbitalVenusPeriodInSeconds);
    }

    onSaturn(): number {
        const orbitalVenusPeriodInSeconds = 29.447498 * this.orbitalPeriodOnEarthInSeconds;
        return this.calculatePlanetPeriodInSeconds(orbitalVenusPeriodInSeconds);
    }

    onUranus(): number {
        const orbitalVenusPeriodInSeconds = 84.016846 * this.orbitalPeriodOnEarthInSeconds;
        return this.calculatePlanetPeriodInSeconds(orbitalVenusPeriodInSeconds);
    }

    onNeptune(): number {
        const orbitalVenusPeriodInSeconds = 164.79132 * this.orbitalPeriodOnEarthInSeconds;
        return this.calculatePlanetPeriodInSeconds(orbitalVenusPeriodInSeconds);
    }

    private calculatePlanetPeriodInSeconds(orbitalPeriodInSeconds: number): number {
        return Number((this.seconds / orbitalPeriodInSeconds).toFixed(2));
    }
}

