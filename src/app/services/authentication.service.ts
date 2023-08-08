import { HttpClient } from "@angular/common/http";
import { userData } from "../models/employee";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class AuthenticationService {

    constructor(private http: HttpClient) { }

    baseUrl = "http://localhost:3000/user";

    fetchAllUser() {
        return this.http.get<userData[]>(this.baseUrl);
    }

    register(user: any) {
        return this.http.post("http://localhost:3000/user", user);
    }
}