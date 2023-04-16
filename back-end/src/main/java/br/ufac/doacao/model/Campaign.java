package br.ufac.doacao.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
public class Campaign implements Serializable {
    // TODO: image
    // TODO: resume
    // TODO: description
    // TODO: category
    // TODO: disablemotive (categorizado)[não tenho interesse na plataforma, não atendeu as especitativas, estou encerrando as atividades, outros motivos]

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @ManyToOne
    private Institution institution;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "campaign_id")
    private List<Item> item;

    @OneToMany(mappedBy = "campaign")
    private List<Enjoy> enjoys;

    @Column(nullable = false)
    private String cover_image = "test.jpg";

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private ECategory category = ECategory.SOCIAL;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String resume;

    @Column(nullable = false)
    private String description;

    @Column(nullable = true)
    private String result;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private EStatus status = EStatus.PROGRESS;

    @Column(nullable = false)
    private boolean active = true;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Institution getInstitution() {
        return institution;
    }

    public void setInstitution(Institution institution) {
        this.institution = institution;
    }

    public List<Item> getItem() {
        return item;
    }

    public void setItem(List<Item> item) {
        this.item = item;
    }

    public String getCover_image() {
        return cover_image;
    }

    public void setCover_image(String cover_image) {
        this.cover_image = cover_image;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public EStatus getStatus() {
        return status;
    }

    public void setStatus(EStatus status) {
        this.status = status;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public List<Enjoy> getEnjoys() {
        return enjoys;
    }

    public void setEnjoys(List<Enjoy> enjoys) {
        this.enjoys = enjoys;
    }

    public ECategory getCategory() {
        return category;
    }

    public void setCategory(ECategory category) {
        this.category = category;
    }

    public String getResume() {
        return resume;
    }

    public void setResume(String resume) {
        this.resume = resume;
    }

}
