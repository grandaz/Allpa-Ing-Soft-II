export default class Measure {
    private _measure_id: number;
    private _name: string;
    private _createdAt: string;
    private _updatedAt: string;

    constructor(measure_id: number, name: string, createdAt: string, updatedAt: string) {
        this._measure_id = measure_id;
        this._name = name;
        this._createdAt = createdAt;
        this._updatedAt = updatedAt;
    }

    get measure_id(): number {
        return this._measure_id;
    }

    set measure_id(measure_id: number) {
        this._measure_id = measure_id;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get createdAt(): string {
        return this._createdAt;
    }

    set createdAt(createdAt: string) {
        this._createdAt = createdAt;
    }

    get updatedAt(): string {
        return this._updatedAt;
    }

    set updatedAt(updatedAt: string) {
        this._updatedAt = updatedAt;
    }
}