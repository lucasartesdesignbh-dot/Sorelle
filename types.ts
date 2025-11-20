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

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}