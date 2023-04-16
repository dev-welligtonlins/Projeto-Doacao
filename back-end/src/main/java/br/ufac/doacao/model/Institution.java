package br.ufac.doacao.model;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Institution implements Serializable {
    // TODO: image
    // TODO: resume
    // TODO: about
    // TODO: mission
    // TODO: vision
    // TODO: value
    // TODO: disablemotive (categorizado)[não tenho interesse na plataforma, não
    // atendeu as especitativas, estou encerrando as atividades, outros motivos]

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;

    @ManyToOne(cascade = CascadeType.ALL)
    private Address address;

    @ManyToOne(cascade = CascadeType.ALL)
    private User user;

    @OneToMany(mappedBy = "institution")
    private List<Campaign> campaigns;

    @OneToMany(mappedBy = "institution")
    private List<Follow> follows;

    @OneToMany(mappedBy = "institution")
    private List<Trust> trusts;

    // Personal properties

    @Column(nullable = false)
    private String cover_image = "test.jpg";

    @Column(nullable = false)
    private String corporate_name;

    @Column(nullable = false)
    private String fantasy_name;

    @Column(nullable = false)
    private String cnpj;

    @Column
    private String email;

    @Column
    private String phone;

    @Column
    private String linkMain;

    @Column
    private String linkAlternate;

    @Column(nullable = false)
    private String resume;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private String about;

    @Column(nullable = false)
    private String mission;

    @Column(nullable = false)
    private String vision;

    @Column(nullable = false)
    private String value;

    @Column(nullable = false)
    private LocalDate opening_date;

    @Column(nullable = false)
    private boolean pending = false;

    @Column(nullable = false)
    private boolean active = true;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public List<Follow> getFollows() {
        return follows;
    }

    public void setFollows(List<Follow> follows) {
        this.follows = follows;
    }

    public List<Trust> getTrusts() {
        return trusts;
    }

    public void setTrusts(List<Trust> trusts) {
        this.trusts = trusts;
    }

    public String getCorporate_name() {
        return corporate_name;
    }

    public void setCorporate_name(String corporate_name) {
        this.corporate_name = corporate_name;
    }

    public String getFantasy_name() {
        return fantasy_name;
    }

    public void setFantasy_name(String fantasy_name) {
        this.fantasy_name = fantasy_name;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public LocalDate getOpening_date() {
        return opening_date;
    }

    public void setOpening_date(LocalDate opening_date) {
        this.opening_date = opening_date;
    }

    public boolean isPending() {
        return pending;
    }

    public void setPending(boolean pending) {
        this.pending = pending;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<Campaign> getCampaigns() {
        return campaigns;
    }

    public void setCampaigns(List<Campaign> campaigns) {
        this.campaigns = campaigns;
    }

    public String getCover_image() {
        return cover_image;
    }

    public void setCover_image(String cover_image) {
        this.cover_image = cover_image;
    }

    public String getResume() {
        return resume;
    }

    public void setResume(String resume) {
        this.resume = resume;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAbout() {
        return about;
    }

    public void setAbout(String about) {
        this.about = about;
    }

    public String getMission() {
        return mission;
    }

    public void setMission(String mission) {
        this.mission = mission;
    }

    public String getVision() {
        return vision;
    }

    public void setVision(String vision) {
        this.vision = vision;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getLinkMain() {
        return linkMain;
    }

    public void setLinkMain(String linkMain) {
        this.linkMain = linkMain;
    }

    public String getLinkAlternate() {
        return linkAlternate;
    }

    public void setLinkAlternate(String linkAlternate) {
        this.linkAlternate = linkAlternate;
    }

}
