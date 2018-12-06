#ifndef BLAKE2b_H
#define BLAKE2b_H

#ifdef __cplusplus
extern "C"
{
#endif

#include <stdint.h>

    void blake2b_hash(const char *input, char *output, uint32_t len);

    void blake2b_hash_double(const char *input, char *output, uint32_t len);

#ifdef __cplusplus
}
#endif

#endif
