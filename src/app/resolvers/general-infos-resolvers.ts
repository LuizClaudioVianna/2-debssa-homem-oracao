import { inject } from "@angular/core";
import { ResolveFn } from "@angular/router";
import { GeneralInfosService } from "../services/general-infos.service";
import { firstValueFrom } from "rxjs";

export const generalInfosResolvers: ResolveFn<any> = () => {
    const generalInfosService = inject(GeneralInfosService);

    return Promise.all([
        firstValueFrom(generalInfosService.getRoles()),
        firstValueFrom(generalInfosService.getUsers())
    ]).then(([roles,users]) => {
        return {
            roles,
            users
        }
    });
}