import { inject } from "@angular/core";
import { ResolveFn } from "@angular/router";
import { GeneralInfosService } from "../services/general-infos.service";
import { firstValueFrom } from "rxjs";

export const generalInfosResolvers: ResolveFn<any> = () => {
    const generalInfosService = inject(GeneralInfosService);

    return Promise.all([
        firstValueFrom(generalInfosService.getRoles()),
        firstValueFrom(generalInfosService.getUsers()),
        firstValueFrom(generalInfosService.getClients())
    ]).then(([roles,users,clients]) => {
        return {
            roles,
            users,
            clients
        }
    });
}