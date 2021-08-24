package fr.diginamic.springbootangular.entities;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity

public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String login;
    private String motDePasse;
    private String type;
    private String nom;
    private String prenom;
    private int congesPayesRestants;
    private int rttRestants;

    @ManyToOne
    @JoinColumn(name="ROLE_ID")
    private Role role;


    @OneToMany(mappedBy="user")
    private Set<Absence> absences;

    /* many to one relation between use entity and department entity on users
     */
    @ManyToOne
    @JoinColumn(name="DEP_ID")
    private Department department;

    /*OneToOne relation between entity and department on User manager

    @OneToOne(mappedBy="manager")
    private Department department; */

    public User(){
        absences=new HashSet<Absence>();
    }

    public User(String login, String motDePasse, String type, String nom, String prenom, int congesPayesRestants, int rttRestants) {
        this.type=type;
        this.login = login;
        this.motDePasse = motDePasse;
        this.nom = nom;
        this.prenom = prenom;
        this.congesPayesRestants = congesPayesRestants;
        this.rttRestants = rttRestants;
    }


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }
    public String getType() {
        return login;
    }

    public void setType(String login) {
        this.type = type;
    }

    public String getMotDePasse() {
        return motDePasse;
    }

    public void setMotDePasse(String motDePasse) {
        this.motDePasse = motDePasse;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public int getCongesPayesRestants() {
        return congesPayesRestants;
    }

    public void setCongesPayesRestants(int congesPayesRestants) {
        this.congesPayesRestants = congesPayesRestants;
    }

    public int getRttRestants() {
        return rttRestants;
    }

    public void setRttRestants(int rttRestants) {
        this.rttRestants = rttRestants;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public Set<Absence> getAbsences() {
        return absences;
    }

    public void setAbsences(Set<Absence> absences) {
        this.absences = absences;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    @Override
    public String toString() {
        return "User{" +
                "login='" + login + '\'' +
                ", motDePasse='" + motDePasse + '\'' +
                ", type='" + type + '\'' +
                ", nom='" + nom + '\'' +
                ", prenom='" + prenom + '\'' +
                ", conges_payes_restants=" + congesPayesRestants +
                ", rtt_restants=" + rttRestants +
                '}';
    }
}
