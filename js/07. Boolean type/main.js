let tr = true,
    fl = false,
    Tr = Boolean(true),
    Fl = Boolean(false),
    TR = new Boolean(true),
    FL = new Boolean(false);

console.log(tr);
console.log(fl);
console.log(Tr);
console.log(Fl);
console.log(TR);
console.log(FL);

// пять значений которые возвратят ложь (false)
console.log("");
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(0));
console.log(Boolean(''));

console.log("");
let a = 0,
    isTrue = true;

isTrue && (a = 5);
console.log(a); // 5

isTrue = false;
isTrue && (a = 10);
console.log(a); // 5

console.log("");
let message = "",
    defaultMessage = "Default message";

message = message || defaultMessage;
console.log(message); // "Default message"

message = "Zzz Zzz яяя";
message = message || defaultMessage;
console.log(message); // "Zzz Zzz яяя"