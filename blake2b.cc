#include "blake2b.h"
#include "blake2/sse/blake2.h"

// #define BLAKE_FN_CAST(fn) \
//     reinterpret_cast<uintptr_t (*)(void *, const uint8_t *, uint64_t)>(fn)

void blake2b_hash(const char *input, char *output, uint32_t len)
{
    blake2b_state state;
    blake2b_init(&state, 32);
    blake2b_update(&state, (const uint8_t *)input, len);
    blake2b_final(&state, (uint8_t *)output, 32);
}

void blake2b_hash_double(const char *input, char *output, uint32_t len)
{
    char hash1[32];
    blake2b_hash(input, hash1, len);
    blake2b_hash(hash1, output, 32);
}
