import { EventInput } from '@fullcalendar/core';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'Agendamento Diário',
    start: TODAY_STR
  },
  {
    id: createEventId(),
    title: 'Consulta= P: Roberta Moura - M: Dra. Flávia Oliveira',
    start: TODAY_STR + 'T08:15:00',
    end: TODAY_STR + 'T09:00:00'
  },
  {
    id: createEventId(),
    title: 'Consulta= P: Patricia Souza - M: Dr. Augusto Campos',
    start: TODAY_STR + 'T09:15:00',
    end: TODAY_STR + 'T10:00:00'
  },
  {
    id: createEventId(),
    title: 'Consulta= P: Alessandro Vieira - M: Dr. Flávia Oliveira',
    start: TODAY_STR + 'T10:15:00',
    end: TODAY_STR + 'T11:00:00'
  },
  {
    id: createEventId(),
    title: 'Consulta= P: Carlos Silva - M: Dr. Augusto Campos',
    start: TODAY_STR + 'T11:15:00',
    end: TODAY_STR + 'T12:00:00'
  },
  {
    id: createEventId(),
    title: 'Consulta= P: Sávio Siqueira - M: Dr. Flávia Oliveira',
    start: TODAY_STR + 'T13:15:00',
    end: TODAY_STR + 'T14:00:00'
  },
  {
    id: createEventId(),
    title: 'Consulta= P: Luciano Brasil - M: Dr. Augusto Campos',
    start: TODAY_STR + 'T14:15:00',
    end: TODAY_STR + 'T15:00:00'
  },
];

export function createEventId() {
  return String(eventGuid++);
}
