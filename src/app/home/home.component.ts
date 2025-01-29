import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { RouterLinkActive, RouterOutlet, RouterLink } from "@angular/router";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css", "/src/styles.css"],
})
export class HomeComponent implements OnInit {
  dynamicText: string = "";
  phrases: string[] = [
    "Team Player.",
    "Software Developer.",
    "Backend Engineer.",
    "Software Engineer.",
    "Code Enthusiast.",
  ];

  currentPhraseIndex: number = 0;
  currentCharIndex: number = 0;
  isDeleting: boolean = false;
  typingSpeed: number = 100;
  deletingSpeed: number = 100;
  delayBetweenPhrases: number = 2000;

  constructor(private titleService: Title) {
    this.titleService.setTitle("PK | Home");
  }

  ngOnInit(): void {
    this.type();
  }

  type() {
    const currentPhrase = this.phrases[this.currentPhraseIndex];
    if (this.isDeleting) {
      this.dynamicText = currentPhrase.substring(0, this.currentCharIndex - 1);
      this.currentCharIndex--;
    } else {
      this.dynamicText = currentPhrase.substring(0, this.currentCharIndex + 1);
      this.currentCharIndex++;
    }

    if (!this.isDeleting && this.currentCharIndex === currentPhrase.length) {
      this.isDeleting = true;
      setTimeout(() => this.type(), this.delayBetweenPhrases);
    } else if (this.isDeleting && this.currentCharIndex === 0) {
      this.isDeleting = false;
      this.currentPhraseIndex =
        (this.currentPhraseIndex + 1) % this.phrases.length;
      setTimeout(() => this.type(), 500);
    } else {
      const speed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;
      setTimeout(() => this.type(), speed);
    }
  }

  downloadPDF() {
    const link = document.createElement("a");
    link.href = "../../assets/Praveen Resume latest (1).docx"; // Replace with your actual file name
    link.download = "Praveen_Resume.docx"; // The name the downloaded file will have
    link.click();
  }
}
