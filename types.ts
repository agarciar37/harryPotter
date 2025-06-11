import { OptionalId } from 'mongodb';

export type DNI = {
    DNI: string;
}

export type ContactDB = OptionalId<Omit<DNI, "id">>;