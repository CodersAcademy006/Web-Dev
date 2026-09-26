# PDF Password Opener

Recovers the password of your own locked PDF by trying each entry of a wordlist with `pikepdf`.

**Category:** Python Scripts  
**Tech:** Python

## How to run

```bash
pip install pikepdf tqdm
python main.py
```

Before running, put a `wordlist.txt` (one password per line) next to `main.py` and change the PDF file name in `main.py` (it is hard-coded to `DSMUN DISEC BG.pdf`). Only use this on PDFs you own.

## Files

```
main.py
```
