
import React from 'react';

export enum BodyArea {
  AXILA = 'Axila',
  BUCO = 'Buço',
  BARBA = 'Faixa de Barba'
}

export interface UserFormData {
  name: string;
  phone: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  imageUrl: string;
}

export type ViewState = 'home' | 'promotion' | { type: 'detail', serviceId: string };

declare global {
  interface Window {
    fbq: any;
  }
}
