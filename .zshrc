# Created by newuser for 5.9

eval "$(starship init zsh)"

alias eZ="vim ~/.zshrc"
alias eI="vim ~/.config/i3/config"
alias eV="vim ~/.vimrc"
alias eS="vim ~/.config/starship.toml"
alias wetter="curl http://v3.wttr.in/Niedersachsen.sxl; sleep 5; curl http://v1.wttr.in/Bramsche"
alias history="history 0"
alias etcher="usbimager"
alias ls='ls --color=auto'


if test $TMUX; then
   bindkey '^[[1~' beginning-of-line
   bindkey '^[[4~' end-of-line
   bindkey '^[[3~' delete-char
   bindkey '^[[1;5D' backward-word
   bindkey '^[[1;5C' forward-word
   bindkey '^[[3;5~' delete-word
   bindkey '^H' backward-delete-word
else
   bindkey '^[[H' beginning-of-line
   bindkey '^[[F' end-of-line
   bindkey '^[[3~' delete-char
   bindkey '^[[1;5D' backward-word
   bindkey '^[[1;5C' forward-word
   bindkey '^[[3;5~' delete-word
   bindkey '^H' backward-delete-word
fi

