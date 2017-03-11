class BootstrapProgress extends HTMLElement {
  connectedCallback() {
    const progressBar = document.createElement("div");
    progressBar.className = "progress-bar";
    progressBar.style = "width: " + this.getAttribute("data-complete");

    const progress = document.createElement("div");
    progress.className = "progress";
    progress.appendChild(progressBar);

    this.appendChild(progress);
  }
}

customElements.define("bootstrap-progress", BootstrapProgress);
