import { Injectable } from '@nestjs/common';

export type Papel = 'solicitante' | 'gestor' | 'auditor';

export type Usuario = {
  id: number;
  nome: string;
  email: string;
  senhaHash: string;
  papel: Papel;
  ativo: boolean;
};

export type UsuarioAutenticado = Omit<Usuario, 'senhaHash'>;

@Injectable()
export class UsuariosService {
  private readonly usuarios: Usuario[] = [
    {
      id: 1,
      nome: 'Paulo',
      email: 'paulo@empresa.com',
      senhaHash: '$2b$12$0nCFRGk0xX.8Z/zXUtqLKu/Ubv3Z5E.Q3ewDkpuQPnv/ms90.k.mS',
      papel: 'gestor',
      ativo: true,
    },
    {
      id: 2,
      nome: 'Bruno Silva',
      email: 'bruno@empresa.com',
      senhaHash: '$2b$12$5S9LDbR3FznMAsZY5P..2OKE932dOHeVvGrmlfklgquClbkKgUidC',
      papel: 'solicitante',
      ativo: true,
    },
    {
      id: 3,
      nome: 'Nóbrega',
      email: 'nobrega@empresa.com',
      senhaHash: '$2b$12$P3/Gl0/GYqcz09VI1Szxsui2g9y0LzAnEOJ1GCXWBvBb5KmGYC9Gy',
      papel: 'auditor',
      ativo: true,
    },

  ];

  buscarPorEmail(email: string) {
    return this.usuarios.find((usuario) => usuario.email === email);
  }
}
