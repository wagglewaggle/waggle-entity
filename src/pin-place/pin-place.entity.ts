import { CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ExtraPlace } from '../extra-place/extra-place.entity';
import { KtPlace } from '../kt-place/kt-place.entity';
import { SktPlace } from '../skt-place/skt-place.entity';
import { User } from '../user/user.entity';

@Entity()
export class PinPlace {
  @PrimaryGeneratedColumn()
  idx: number;

  @ManyToOne(() => User, (user) => user.pinPlaces)
  user: User;

  @ManyToOne(() => SktPlace, (sktPlace) => sktPlace.pinPlaces, { nullable: true })
  sktPlace: SktPlace;

  @ManyToOne(() => KtPlace, (ktPlace) => ktPlace.pinPlaces, { nullable: true })
  ktPlace: KtPlace;

  @ManyToOne(() => ExtraPlace, (extraPlace) => extraPlace.pinPlaces, { nullable: true })
  extraPlace: ExtraPlace;

  @CreateDateColumn()
  createdDate: Date;
}
